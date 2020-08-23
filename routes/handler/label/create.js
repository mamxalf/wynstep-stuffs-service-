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
    const idStuff = req.body.id_stuff;
    const checkStuff = await models.Stuff.findByPk(idStuff);

    if (!checkStuff){
        return res.status(404).json({
            status: 'error',
            message: 'Stuff unknown!'
        });
    }

    const createLabel = await models.Label.create(req.body);

    return res.json({
        status: 'success',
        data: createLabel
    });
}