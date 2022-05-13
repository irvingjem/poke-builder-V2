const router = require('express').Router();
const { route } = require('express/lib/application');
const { Pokemon } = require('../../models');
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
            if (!userData) {
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

// log in route
router.post('/login', (req, res) => {
    User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(userData => {
            if (!userData) {
                res.status(400).json({ message: 'No user with that username.' });
                return;
            }

            // verify user
            const validPassword = userData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password.' });
                return;
            }

            req.session.save(() => {
                // declare session variables
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;

                res.json({ user: userData, message: 'You are now logged in.' });
            });
        });
});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


// Create a pokemon model then join them by user

router.put('/pokemon', (req, res) => {
    console.log(req.body)
    Pokemon.create({
            pokeId: req.body.pokeId,
            userId: req.session.user_id
        }).then(dbUserData => {
            res.json(dbUserData);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get route work in progress

// route.get('/userpoke', (req, res) => {
//     Pokemon.findAll({
//         where: { userId: req.session.user_id }
//     }).then(dbUserPoke => {
//         res.json(dbUserPoke);

//     })
// });

// router.push('', (req, res) => {

// })


module.exports = router;