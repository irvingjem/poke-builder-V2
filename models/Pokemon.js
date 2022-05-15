const { Model, DataTypes } = require('sequelize');
// const { DataTypes } = require('sequelize/lib');
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
    },
    // set pokeDex to pokemon's dex entry number
    // pokeDex: {
    //     type: DataTypes.INTEGER
    // }
}, { sequelize })


module.exports = Pokemon;