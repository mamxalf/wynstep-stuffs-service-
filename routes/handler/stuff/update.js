const models = require('../../../models/');
const Slug = require('slug');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
      id_brand: 'number|empty:false',
      title: 'string|empty:false',
      price: 'number|empty:false',
      descriptions: 'string|empty:false',
      details: 'string|empty:false',
      quantity: 'number|empty:false|optional',
      type: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const id = req.params.id;
    const stuff = await models.Stuff.findByPk(id);

    if(!stuff){
        return res.status(404).json({
            status: 'error',
            message: 'Data Stuff not Found'
        });
    }

    const slug = Slug(req.body.title);

    const data = {
      id_brand: req.body.id_brand,
      title: req.body.title,
      price: req.body.price,
      descriptions: req.body.descriptions,
      details: req.body.details,
      quantity: req.body.quantity,
      type: req.body.type,
      slug: slug,
    }

    const updateStuff = await stuff.update(data);


    return res.json({
       status: 'success',
       message: 'Data Stuff has been updated!',
       data: updateStuff
    });
}