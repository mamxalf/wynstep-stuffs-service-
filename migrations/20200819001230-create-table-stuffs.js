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
      slug: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stuffs');
  }
};
