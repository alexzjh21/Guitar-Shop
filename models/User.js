const { Model, DataTypes } = require('sequelize');
const bcyrpt = require('bcrypt')
const sequelize = require('../config/connection');


class User extends Model {}

User.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    // hooks as a second object 
    { 
        hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcyrpt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcyrpt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user' 
    }
);

module.exports = User;
