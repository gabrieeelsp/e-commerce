const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'sale',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            tableName: 'sales',
        },
    );
};
