// welcome home
const sequelize = require("../config/connection");
const router = require("express").Router();
const Pokemon = require("../models/Pokemon");

// get homepage
router.get("/", (req, res) => {
    res.render("homepage");
});

router.get('/dashboard', (req, res) => {
    Pokemon.findAll({
            limit: 6,
            where: { userId: req.session.user_id }
        })
        .then(pokeId => {
            // console.log("pls work", pokeId)
            const pokemon = pokeId.map((pokemon) => pokemon.get({
                plain: true
            }))
            console.log(pokemon)
            res.render('dashboard', {
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

router.get("/dashboard", (req, res) => {
    Pokemon.findAll({
            limit: 6,
            include: [{ all: true, nested: true }],
            // include: [{ model: Pokemon }]
            // where: { userId: req.session.user_id }
        })
        .then((pokeId) => {
            //   res.json(pokeId);
            res.render("dashboard", {
                // layout: "main",
                // title: "Pokemon",
                pokeId: pokeId,
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    // const pokeBelt = data.get({
    //     plain: true
    // })
});

module.exports = router;