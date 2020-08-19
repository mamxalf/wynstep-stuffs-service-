const express = require('express');
const router = express.Router();

const stuffHandler = require('./handler/stuff');

router.get('/', stuffHandler.getAll);

module.exports = router;