'use strict';
const songData = require('./songData.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Songs",
    //  [
    //    {
    //      name: "Swirl",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/01+-+Swirl+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Shore Road",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/02+-+Shore+Road+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Red Shades",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/03+-+Red+Shades+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Leaps and Bounds",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/04+-+Leaps+and+Bounds+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Shore Road",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/02+-+Shore+Road+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Free, free, free",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/05+-+Free+Free+Free.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Shore Road",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/02+-+Shore+Road+1.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Cherrapunji",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/06+-+Cherrapunji.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Cherrapunji",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/07+-+Incantation.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //    {
    //      name: "Marseilles",
    //      songLink:
    //        "https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/08+-+Marseilles.mp3",
    //      artistId: 1,
    //      albumId: 1,
    //    },
    //  ],
    songData,
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
