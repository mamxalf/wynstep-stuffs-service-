module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('Photo', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_stuff: DataTypes.INTEGER,
      image: DataTypes.STRING,
      is_default: DataTypes.BOOLEAN
    },{
        tableName: 'photos',
        timestamps: false
    });

    return Photo;
}