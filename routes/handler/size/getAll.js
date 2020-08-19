const { Size } = require('../../../models/');

module.exports = async (req, res) => {
    const sizes = await Size.findAll();

    return res.json({
       status: 'success',
       data: sizes
    });
}