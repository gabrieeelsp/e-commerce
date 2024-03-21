const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'sale',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                defaultValue: UUIDV4(),
            },
        },
        {
            tableName: 'sales',
        },
    );
};
