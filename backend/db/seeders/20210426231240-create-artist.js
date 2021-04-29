'use strict';

const artistData = require ('./artistData.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Artists",
    //  [
    //    {
    //      name: "Alex Clough",
    //      bio: "He was a good man",
    //      location: "Everywhere",
    //      avatarUrl: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    //    },
    //  ],
    artistData,
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Artists', null, {});
  }
};
