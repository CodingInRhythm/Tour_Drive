'use strict';
const userCollectionData = require('../../data/userCollection.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('User_Collections', 
  //  [{
  //    name: 'John Doe',
  //    isBetaMember: false
  //  }],
  userCollectionData, 
   {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('User_Collections', null, {});
  }
};
