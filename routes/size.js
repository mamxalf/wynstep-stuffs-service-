const express = require('express');
const router = express.Router();

const sizeHandler = require('./handler/size');

router.get('/', sizeHandler.getAll);
router.get('/:id', sizeHandler.get);
router.post('/', sizeHandler.create);
router.delete('/:id', sizeHandler.destroy);
router.put('/:id', sizeHandler.update);

module.exports = router;