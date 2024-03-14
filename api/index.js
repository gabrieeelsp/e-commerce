const server = require('./src/server');
const { conn } = require('./src/db');
const productSeeder = require('./src/seeders/productsSeeder');
const subrubrosSeeder = require('./src/seeders/subrubrosSeeder');
const rubrosSeeder = require('./src/seeders/rubrosSeeder');

const { PORT_APP } = process.env;

conn.sync({ force: true }).then(() => {
    rubrosSeeder();
    subrubrosSeeder();
    productSeeder();
    server.listen(PORT_APP, () => {
        // eslint-disable-next-line no-console
        console.log(`Server listening at ${PORT_APP}`);
    });
});
