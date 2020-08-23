const models  = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const discounts = await models.Discount.findByPk(id,{
        include:{
            model: models.Stuff
        }
    });

    if(!discounts){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Stuff not Found'
        });
    }

    return res.json({
       status: 'success',
       data: discounts
    });
}