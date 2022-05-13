// welcome home
const sequelize = require('../config/connection');
const router = require('express').Router();
const Pokemon = require('../models/Pokemon')



// get homepage 
router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/generate', (req, res) => {
    res.render('generate')
});

router.get('/dashboard', (req, res) => {
    Pokemon.findAll({
            limit: 6,
            // where: { userId: req.session.user_id }
        })
        .then(pokeId => {
            res.render('dashboard', {
                layout: 'main',
                pokedata: pokeId
            });
            // res.json(pokeId)
        })
        .catch(err => {
            res.status(500).json(err);
        })
        // const pokeBelt = data.get({
        //     plain: true
        // })
});

module.exports = router;