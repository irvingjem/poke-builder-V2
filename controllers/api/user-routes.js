const router = require('express').Router();
const User = require('../../models/User');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        // do not include password info
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;