const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'brand',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            url: {
                type: DataTypes.STRING,
                unique: true,
            },
        },
        {
            tableName: 'brands',
            timestamps: false,
        },
    );
};
