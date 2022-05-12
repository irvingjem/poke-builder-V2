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
        res.status(500).json(err);
    });
});

// get single user based off id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
        // add code for pokemon team
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No trainer found with this ID.' });
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });
    });
});

module.exports = router;