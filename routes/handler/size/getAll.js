const models = require('../../../models/');

module.exports = async (req, res) => {
    const sizes = await models.Size.findAll({
        include: {
            model: models.Stuff
        }
    });

    return res.json({
       status: 'success',
       data: sizes
    });
}