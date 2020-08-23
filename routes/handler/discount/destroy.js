const models  = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const discount = await models.Discount.findByPk(id);

    if(!discount){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Stuff not Found'
        });
    }

    await discount.destroy();

    return res.json({
       status: 'success',
       message: 'Discount data has been deleted!',
       data: discount
    });
}