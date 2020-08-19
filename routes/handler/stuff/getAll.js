const { Stuff } = require('../../../models/');

module.exports = async (req, res) => {
    const stuff = await Stuff.findAll();

    return res.json({
       status: 'success',
       data: stuff
    });
}