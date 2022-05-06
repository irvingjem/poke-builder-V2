// welcome home
const sequelize = require('../config/connection');
const router = require('express').Router();



// get homepage 
router.get('/', (req, res) => {
    res.render('homepage', {})
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;