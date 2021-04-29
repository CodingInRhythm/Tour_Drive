'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Collection = sequelize.define('User_Collection', {
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  User_Collection.associate = function(models) {
    // associations can be defined here
  
  };
  return User_Collection;
};