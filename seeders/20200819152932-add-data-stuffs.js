'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stuffs', [{
      id_brand: 1,
      title: 'Patrobas Equil Low Black White',
      price: 250000,
      descriptions: 'Sepatu Bagus keren dan elegan',
      details: 'With patrofoam',
      quantity: 10,
      type: 'Low',
      slug: 'patrobas-equil-low-black-white'
    }, {
      id_brand: 1,
      title: 'Patrobas Equil High Black White',
      price: 300000,
      descriptions: 'Sepatu Bagus keren dan elegan',
      details: 'With patrofoam',
      quantity: 20,
      type: 'High',
      slug: 'patrobas-equil-high-black-white'
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stuffs', null, {});
  }
};
