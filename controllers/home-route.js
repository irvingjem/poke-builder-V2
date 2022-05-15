// welcome home
const sequelize = require('../config/connection');
const router = require('express').Router();
const Pokemon = require('../models/Pokemon')



// get homepage 
router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/generate', (req, res) => {
    res.render('generate', {
        loggedIn: true
    })
});

router.get('/dashboard', (req, res) => {
    Pokemon.findAll({
            limit: 6,
            where: { userId: req.session.user_id }
        })
        .then(pokeId => {
            // console.log("pls work", pokeId)
            const pokemon = pokeId.map((pokemon) => pokemon.get({
                plain: true,
            }))
            console.log("here is the pokemon", pokemon)
            res.render('dashboard', {
                loggedIn: true,
                layout: 'main',
                pokeId: pokemon
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
        // const pokeBelt = data.get({
        //     plain: true
        // })
});

module.exports = router;