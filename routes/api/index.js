const express = require('express');
const user = require('./users');


const router = express.Router();

router.use('/api/v1', user);


/**
 * Home route
 */
router.get('/', (req, res) => {
    res.status(200).json({ 'message' : 'Welcome to Mini Market Bank... Routes available on /api/v1'});
});


module.exports = router;
