const models = require('../../../models/');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
      id_stuff: 'number|empty:false',
      amount: 'number|empty:false',
      time: 'number|empty:false',
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const createDiscount = await models.Discount.create(req.body);

    return res.json({
        status: 'success',
        data: createDiscount
    });
}