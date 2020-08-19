const express = require('express');
const router = express.Router();

const sizeHandler = require('./handler/size');

router.get('/', sizeHandler.getAll);

module.exports = router;