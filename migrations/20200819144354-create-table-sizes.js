'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sizes', {
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
      size_37: Sequelize.INTEGER,
      size_38: Sequelize.INTEGER,
      size_39: Sequelize.INTEGER,
      size_40: Sequelize.INTEGER,
      size_41: Sequelize.INTEGER,
      size_42: Sequelize.INTEGER,
      size_43: Sequelize.INTEGER,
      size_44: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sizse');
  }
};
