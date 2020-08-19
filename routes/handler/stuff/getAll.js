const models = require('../../../models/');

module.exports = async (req, res) => {
    const stuff = await models.Stuff.findAll({
        include: [
            { model: models.Size },
            { model: models.Photo },
            { model: models.Discount }
        ]
    });

    return res.json({
       status: 'success',
       data: stuff
    });
}