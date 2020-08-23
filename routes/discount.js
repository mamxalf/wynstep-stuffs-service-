const express = require('express');
const router = express.Router();

const discountHandler = require('./handler/discount');

router.get('/', discountHandler.getAll);
router.get('/:id', discountHandler.get);
router.post('/', discountHandler.create);
router.delete('/:id', discountHandler.destroy);
router.put('/:id', discountHandler.update);

module.exports = router;