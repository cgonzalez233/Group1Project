const router = require('express').Router();
const apiRoutes = require('./api');
const displayRoutes = require('./displayRoutes.js');

router.use('/api', apiRoutes);
router.use('/', displayRoutes);

module.exports = router;
