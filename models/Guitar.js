const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guitar extends Model {}

Guitar.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        guitar_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        guitar_brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
     sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Guitar',
    }
);


module.exports = Guitar;