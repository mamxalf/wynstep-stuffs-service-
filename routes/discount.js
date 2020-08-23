const express = require('express');
const router = express.Router();

const stuffHandler = require('./handler/discount');

router.get('/', stuffHandler.getAll);
// router.get('/:id', stuffHandler.get);
// router.post('/', stuffHandler.create);
// router.delete('/:id', stuffHandler.destroy);
// router.put('/:id', stuffHandler.update);

module.exports = router;