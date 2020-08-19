module.exports = (sequelize, DataTypes) => {
    const Label = sequelize.define('Label', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_stuff: DataTypes.INTEGER,
      is_promo:  DataTypes.BOOLEAN,
      is_discount: DataTypes.BOOLEAN,
      is_new: DataTypes.BOOLEAN,
      is_soldout: DataTypes.BOOLEAN,
      is_topsell: DataTypes.BOOLEAN
    },{
        tableName: 'labels',
        timestamps: false
    });

    return Label;
}