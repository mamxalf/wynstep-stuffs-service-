'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('labels', {
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
    await queryInterface.dropTable('labels');
  }
};
