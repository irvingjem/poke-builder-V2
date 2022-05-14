const User = require('./User')
const Pokemon = require('./Pokemon')

Pokemon.belongsTo(User);

User.hasMany(Pokemon);


module.exports = {
    User,
    Pokemon
};