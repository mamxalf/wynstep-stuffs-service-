module.exports = (sequelize, DataTypes) => {
    const Stuff = sequelize.define('Stuff', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_brand: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      descriptions: DataTypes.TEXT,
      details: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      type: {
        type: DataTypes.ENUM('Low', 'High')
      },
      slug: DataTypes.STRING,
      is_promo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_discount:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_new:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_soldout:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_topsell:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },{
        tableName: 'stuffs',
        timestamps: false
    });

    return Stuff;
}