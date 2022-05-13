const sequelize = require('../config/connection');
const seedPokemon = require('./pokemon-seeds');
const seedUsers = require("./trainer-seeds");

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ------\n');

    // User Seeds
    await seedUsers();
    console.log('\n----- TRAINERS SYNCED ------\n');

    // Pokemon seeds
    // await seedPokemon();
    // console.log('\n----- POKEMON SYNCED ------\n');

    // await seedTeam();
    // console.log('\n----- TRAINERS SYNCED ------\n');

    process.exit(0);
};

seedAll();