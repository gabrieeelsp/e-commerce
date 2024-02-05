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
        },
        {
            tableName: 'products',
            timestamps: false,
        },
    );
};
