const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { default: slugify } = require('slugify');

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    },
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js',
    )
    .forEach((file) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { User, Sale, Saleitem, Product, Rubro, Subrubro } = sequelize.models;

Saleitem.belongsTo(Sale, {
    foreignKey: {
        allowNull: false,
    },
});
Sale.hasMany(Saleitem);

Sale.belongsTo(User, {
    foreignKey: {
        allowNull: false,
    },
});
User.hasMany(Sale);

Saleitem.belongsTo(Product, {
    foreignKey: {
        allowNull: false,
    },
});
Product.hasMany(Saleitem);

Subrubro.belongsTo(Rubro, {
    foreignKey: {
        allowNull: false,
    },
});

Rubro.hasMany(Subrubro);

Product.belongsTo(Subrubro, {
    foreignKey: {
        allowNull: false,
    },
});

Subrubro.hasMany(Product);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
