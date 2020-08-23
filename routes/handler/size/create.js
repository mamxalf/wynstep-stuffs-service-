const models = require('../../../models/');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
      id_stuff: 'number|empty:false',
      size_37: 'number|empty:false',
      size_38: 'number|empty:false',
      size_39: 'number|empty:false',
      size_40: 'number|empty:false',
      size_41: 'number|empty:false',
      size_42: 'number|empty:false',
      size_43: 'number|empty:false',
      size_44: 'number|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const createSize = await models.Size.create(req.body);

    return res.json({
        status: 'success',
        data: createSize
    });
}