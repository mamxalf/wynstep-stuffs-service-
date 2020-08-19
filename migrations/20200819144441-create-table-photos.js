'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photos', {
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
      image: Sequelize.STRING,
      is_default: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('photos');
  }
};
