'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Songs",
     [
       {
         name: "Swirl",
         songLink:
           "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/01+-+Swirl+1.mp3",
          artistId: 1,
          albumId: 1
          },

     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
