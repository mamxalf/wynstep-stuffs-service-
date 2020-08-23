const models = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const sizes = await models.Size.findByPk(id,{
        include: {
            model: models.Stuff
        }
    });

    if (!sizes){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Size not Found'
        });
    }

    return res.json({
       status: 'success',
       data: sizes
    });
}