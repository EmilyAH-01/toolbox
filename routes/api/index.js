const router = require('express').Router();
const todoRoutes = require('./todo');
const calRoutes = require('./calendar');

router.use('/todo', todoRoutes);
router.use('/calendar', calRoutes);

module.exports = router;