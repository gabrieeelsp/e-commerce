const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'saleitem',
        {
            quantity: {
                type: DataTypes.DOUBLE,
            },
        },
        {
            tableName: 'saleitems',
            timestamps: false,
        },
    );
};
