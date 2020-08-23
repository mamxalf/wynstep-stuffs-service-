const models  = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const label = await models.Label.findByPk(id);

    if(!label){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Label not Found'
        });
    }

    await label.destroy();

    return res.json({
       status: 'success',
       message: 'Label data has been deleted!',
       data: label
    });
}