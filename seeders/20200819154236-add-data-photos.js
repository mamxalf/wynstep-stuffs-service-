'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('photos', [{
      id_stuff: 1,
      image: 'photos1.jpeg',
      is_default: true
    },{
      id_stuff: 1,
      image: 'photos2.jpeg',
      is_default: false
    },{
      id_stuff: 1,
      image: 'photos3.jpeg',
      is_default: false
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('photos', null, {});
  }
};
