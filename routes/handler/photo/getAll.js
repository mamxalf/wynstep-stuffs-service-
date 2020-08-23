const models  = require('../../../models/');

module.exports = async (req, res) => {
    const photos = await models.Photo.findAll({
        include:{
            model: models.Stuff
        }
    });

    return res.json({
       status: 'success',
       data: photos
    });
}