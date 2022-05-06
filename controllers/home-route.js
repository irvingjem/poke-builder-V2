// welcome home
const sequelize = require('../config/connection');
const router = require('express').Router();



// get homepage 
router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/login', (req, res) => {
    res.render('login')
});


module.exports = router;