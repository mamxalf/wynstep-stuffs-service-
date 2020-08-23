const models  = require('../../../models/');

module.exports = async (req, res) => {
    const discounts = await models.Discount.findAll({
        include:{
            model: models.Stuff
        }
    });

    return res.json({
       status: 'success',
       data: discounts
    });
}