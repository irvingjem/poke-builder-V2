const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    pokeId: {
        type: DataTypes.STRING,
    }
}, { sequelize })


module.exports = Pokemon;