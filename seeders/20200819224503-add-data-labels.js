'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('labels', [{
      id_stuff: 1,
      is_promo: false,
      is_discount: false,
      is_new:false,
      is_soldout:false,
      is_topsell:false
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('labels', null, {});
  }
};
