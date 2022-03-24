const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const guitarRoutes = require('./guitar-routes');

router.use('/users', userRoutes);
router.use('/guitars', guitarRoutes);

module.exports = router;