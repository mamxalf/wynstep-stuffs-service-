'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stuffs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_brand: Sequelize.INTEGER,
      title: Sequelize.STRING,
      price: Sequelize.INTEGER,
      descriptions: Sequelize.TEXT,
      details: Sequelize.TEXT,
      quantity: Sequelize.INTEGER,
      type: {
        type: Sequelize.ENUM('Low', 'High')
      },
      slug: Sequelize.STRING,
      is_promo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_discount:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_new:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_soldout:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_topsell:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stuffs');
  }
};
