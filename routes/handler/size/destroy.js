const models = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const sizes = await models.Size.findByPk(id);

    if (!sizes){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Size not Found'
        });
    }

    await sizes.destroy();

    return res.json({
       status: 'success',
       message: 'Discount data has been deleted!',
       data: sizes
    });
}