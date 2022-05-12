const sequelize = require('../config/connection');
const seedUsers = require("./trainer-seeds");

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ------\n');

    await seedUsers();
    console.log('\n----- TRAINERS SYNCED ------\n');

    // await seedTeam();
    // console.log('\n----- TRAINERS SYNCED ------\n');

    process.exit(0);
};

seedAll();