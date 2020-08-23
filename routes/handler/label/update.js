const models = require('../../../models/');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
      id_stuff: 'number|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const id = req.params.id;
    const labels = await models.Label.findByPk(id);

    if(!labels){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Label not Found'
        });
    }

    const labelsUpdate = await labels.update(req.body);

    return res.json({
        status: 'success',
        data: labelsUpdate
    });
}