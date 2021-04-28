'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Follow = sequelize.define('User_Follow', {
    artistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  User_Follow.associate = function(models) {
    // associations can be defined here
  };
  return User_Follow;
};