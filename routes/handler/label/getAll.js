const models  = require('../../../models/');

module.exports = async (req, res) => {
    const labels = await models.Label.findAll({
        include:{
            model: models.Stuff
        }
    });

    return res.json({
       status: 'success',
       data: labels
    });
}