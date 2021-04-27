'use strict';
const fetch = require('node-fetch')
const bcrypt = require("bcryptjs");
const faker = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      let users = [
        {
          username: "TestUser",
          email: "Testuser@user.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ];
     

      let res = await fetch("https://randomuser.me/api/?results=40");
      let userObj = await res.json();
      userObj.results.forEach( (user) => {
        let userObj = {}
        userObj.username = user.login.username
        userObj.email = user.email
        userObj.hashedPassword = bcrypt.hashSync(user.login.password, 10)
        userObj.imageUrl = user.picture.thumbnail
        users.push(userObj)
      })

   return  queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
