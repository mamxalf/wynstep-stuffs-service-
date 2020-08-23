module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_stuff: DataTypes.INTEGER,
      size_37: DataTypes.INTEGER,
      size_38: DataTypes.INTEGER,
      size_39: DataTypes.INTEGER,
      size_40: DataTypes.INTEGER,
      size_41: DataTypes.INTEGER,
      size_42: DataTypes.INTEGER,
      size_43: DataTypes.INTEGER,
      size_44: DataTypes.INTEGER
    },{
        tableName: 'sizes',
        timestamps: false
    });

    Size.associate = function (models) {
        Size.belongsTo(models.Stuff, {
            foreignKey: 'id_stuff',
            targetKey: 'id'
        });
    }

    return Size;
}