const express = require('express');
const chirpsRouter = require('./chirps');

let router = express.Router();

router.use('/api/chirps', chirpsRouter);

nodule.exports = router;