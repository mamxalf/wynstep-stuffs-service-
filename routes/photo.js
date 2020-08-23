const express = require('express');
const router = express.Router();

const photoHandler = require('./handler/photo');

router.get('/', photoHandler.getAll);
router.get('/:id', photoHandler.get);
router.post('/', photoHandler.create);
router.delete('/:id', photoHandler.destroy);
// router.put('/:id', photoHandler.update);

module.exports = router;