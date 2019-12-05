var express = require('express');
var router = express.Router();

const service = require('../services');

/* GET home page. */
router.get('/users', service.getUsers);

module.exports = router;
