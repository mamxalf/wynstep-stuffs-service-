const models  = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const photos = await models.Photo.findByPk(id,{
        include:{
            model: models.Stuff
        }
    });

    if(!photos){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Photo not Found'
        });
    }

    return res.json({
       status: 'success',
       data: photos
    });
}