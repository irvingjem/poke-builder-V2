// welcome home
const sequelize = require('../config/connection');
const router = require('express').Router();



// get homepage 
router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/generate', (req, res) => {
    res.render('generate')
});


module.exports = router;