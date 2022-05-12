// Import modules
const router = require('express').Router();
const trainerRoutes = require('./trainer-routes');
const teamRoutes = require('./team-routes')
const userRoutes = require('./user-routes');

// Routes
// router.use('/team', teamRoutes);
// router.use('/trainer', trainerRoutes);
router.use('/users', userRoutes);


module.exports = router;