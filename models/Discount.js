module.exports = (sequelize, DataTypes) => {
    const Discount = sequelize.define('Discount', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_stuff: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      time: DataTypes.INTEGER
    },{
        tableName: 'discounts',
        timestamps: false
    });

    Discount.associate = function (models) {
        Discount.belongsTo(models.Stuff, {
            foreignKey: 'id_stuff',
            targetKey: 'id'
        });
    }

    return Discount;
}