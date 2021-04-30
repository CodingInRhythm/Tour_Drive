'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Collection = sequelize.define('User_Collection', {
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  User_Collection.associate = function(models) {
    // associations can be defined here
    User_Collection.belongsTo(models.User, {
      foreignKey: 'userId'
    })
   
     User_Collection.belongsTo(models.Album, {
       foreignKey: 'albumId'
     })
    }
  
    return User_Collection;
  };