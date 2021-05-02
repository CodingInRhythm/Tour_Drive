'use strict';

const { Validator } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          // isEmail: true
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      largeImageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  
  
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Artist, {
      through: 'User_Follow',
      foreignKey: 'userId'
    })
    const columnMapping = {
      through: "User_Collection",
      foreignKey: "userId",
      otherKey: "albumId",
    };
    User.belongsToMany(models.Album, columnMapping)
    User.hasMany(models.User_Collection, 
      { foreignKey: "userId" });

  };

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, imageUrl, largeImageUrl } = this; // context will be the User instance
    return { id, username, email, imageUrl, largeImageUrl};
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password, imageUrl }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      imageUrl
    });
    return await User.scope("currentUser").findByPk(user.id);
  };
  return User;
};