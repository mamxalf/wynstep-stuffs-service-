'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('discounts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_stuff: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stuffs',
          key: 'id'
        }
      },
      amount: Sequelize.INTEGER,
      time: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('discounts');
  }
};
