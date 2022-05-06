const seedTrainers = require("./trainer-seeds");
const seedTeam = require("./team-seeds");

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ------\n');

    await seedTrainers();
    console.log('\n----- TRAINERS SYNCED ------\n');

    await seedTeam();
    console.log('\n----- TRAINERS SYNCED ------\n');

    process.exit(0);
};

seedAll();