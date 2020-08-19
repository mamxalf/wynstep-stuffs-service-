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
      slug: DataTypes.STRING
    },{
        tableName: 'stuffs',
        timestamps: false
    });

    Stuff.associate = function (models) {
        Stuff.hasOne(models.Size, {
           foreignKey: 'id_stuff'
        });
        Stuff.hasOne(models.Label, {
           foreignKey: 'id_stuff'
        });
        Stuff.hasMany(models.Photo, {
           foreignKey: 'id_stuff'
        });
        Stuff.hasOne(models.Discount, {
           foreignKey: 'id_stuff'
        });
    }

    return Stuff;
}