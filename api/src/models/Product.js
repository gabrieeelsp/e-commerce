const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'product',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
            },
            url: {
                type: DataTypes.STRING,
                unique: true,
            },
            price: {
                type: DataTypes.DOUBLE,
            },
            external_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'products',
            timestamps: false,
        },
    );
};
