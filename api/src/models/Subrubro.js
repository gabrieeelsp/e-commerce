const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'subrubro',
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
            tableName: 'subrubros',
            timestamps: false,
        },
    );
};
