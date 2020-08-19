'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sizes', [{
      id_stuff: 1,
      size_37: 3,
      size_38: 3,
      size_39: 3,
      size_40: 3,
      size_41: 3,
      size_42: 3,
      size_43: 3,
      size_44: 3
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sizes', null, {});
  }
};
