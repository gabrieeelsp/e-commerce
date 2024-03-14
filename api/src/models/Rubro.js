const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'rubro',
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
            tableName: 'rubros',
            timestamps: false,
        },
    );
};
