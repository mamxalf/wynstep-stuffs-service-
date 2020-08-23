const models  = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const labels = await models.Label.findByPk(id,{
        include:{
            model: models.Stuff
        }
    });

    if(!labels){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Label not Found'
        });
    }

    return res.json({
       status: 'success',
       data: labels
    });
}