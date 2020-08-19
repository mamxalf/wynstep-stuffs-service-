'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('discounts', [{
      id_stuff: 1,
      amount: 20,
      time: 5
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('discounts', null, {});
  }
};
