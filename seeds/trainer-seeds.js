const User = require('../models/User');

const userData = [{
    username: 'ashketchum',
    password: 'gottacatchemall',
    // pokemon: ''
}, {
    username: 'e4lorelei',
    password: 'elite4',
    // pokemon: '87, 91, 80, 124, 131'
}, {
    username: 'e4bruno',
    password: 'elite4',
    // pokemon: '95, 107, 106, 95, 68'
}, {
    username: 'e4agatha',
    password: 'elite4',
    // pokemon: '94, 94, 42, 93, 24'
}, {
    username: 'e4lance',
    password: 'elite4',
    // pokemon: '130, 148, 148, 142, 149'
}, {
    username: 'e4blue',
    password: 'rivalbattle',
    // pokemon: ''
}, {
    username: 'andy',
    password: 'password123'
}];

console.log(User);
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;