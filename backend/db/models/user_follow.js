'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Follow = sequelize.define('User_Follow', {
    artistId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Artists'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {});
  User_Follow.associate = function(models) {
    Artist.belongsToMany(models.User, {
      through: User_Follow,
      // foreignKey: "artistId",
      // otherKey: "userId",
    })
    User.belongsToMany(models.Artist, {
      through: User_Follow,
      // foreignKey: "userId",npm 
      // otherKey: "artistId",
    });
    // associations can be defined here
    // User_Follow.belongsTo(models.User, { foreignKey: 'userId'})
    // User_Follow.belongsTo(models.Artist, { foreignKey: 'artistId'})
  };
  return User_Follow;
};