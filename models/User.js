const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'user'
    }
);

module.exports = User;