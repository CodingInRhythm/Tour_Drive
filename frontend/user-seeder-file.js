
const faker = require("faker");
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
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
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["TestUser", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};


{
  "Id": "Policy1619546470019",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1619546460458",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::codinginrhythmbucket/*",
      "Principal": "*"
    }
  ]
}