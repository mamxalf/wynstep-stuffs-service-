const express = require('express');
const router = express.Router();

const labelHandler = require('./handler/label');

router.get('/', labelHandler.getAll);
router.get('/:id', labelHandler.get);
router.post('/', labelHandler.create);
router.delete('/:id', labelHandler.destroy);
router.put('/:id', labelHandler.update);

module.exports = router;