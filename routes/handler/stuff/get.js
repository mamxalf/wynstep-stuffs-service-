const models = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const stuff = await models.Stuff.findByPk(id,{
        include: [
            { model: models.Size },
            { model: models.Photo },
            { model: models.Label },
            { model: models.Discount }
        ]
    });

    if(!stuff){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Stuff not Found'
        });
    }

    return res.json({
       status: 'success',
       data: stuff
    });
}