const express = require('express');
const convert = require('../controller/converter');
const validateInput = require('../middleware/input');

const router = express.Router();

router.post('/convert', [validateInput], convert);


module.exports = router;
