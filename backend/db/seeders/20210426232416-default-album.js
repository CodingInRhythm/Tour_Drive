'use strict';
const albumData = require('../../data/albumData.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Albums', 
  //  [{
  //    name: 'near, far, beyond',
  //    description: "Might be the greatest album of all time",
  //    albumArt: 'https://randomuser.me/api/portraits/thumb/women/32.jpg',
  //    artistId: 1,
  //  }]
  albumData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
