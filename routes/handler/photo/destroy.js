const models  = require('../../../models/');

const fs = require('fs');

module.exports = async (req, res) => {
    const id = req.params.id;
    const photos = await models.Photo.findByPk(id);

    if(!photos){
        return res.status(404).json({
            status: 'error',
            message: 'Detail Photo not Found'
        });
    }

    fs.unlink(`./public/${photos.image}`, async (err) => {
        if (err) {
            return res.status(400).json({ status: 'error', message: err.message });
        }

        await photos.destroy();

        return res.json({
           status: 'success',
           message: 'Label data has been deleted!',
           data: photos
        });
    });
}