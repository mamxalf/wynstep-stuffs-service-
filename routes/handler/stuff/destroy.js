const models = require('../../../models/');

module.exports = async (req, res) => {
    const id = req.params.id;
    const stuff = await models.Stuff.findByPk(id);

    if(!stuff){
        return res.status(404).json({
            status: 'error',
            message: 'Data Stuff not Found'
        });
    }

    await models.Stuff.destroy({
        where: {
            id: id
        }
    });

    return res.json({
       status: 'success',
       message: 'Data Stuff has been deleted!',
       data: stuff
    });
}