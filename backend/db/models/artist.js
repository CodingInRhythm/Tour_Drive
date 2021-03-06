'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    Artist.hasMany(models.Album, { foreignKey: 'artistId'})
    Artist.belongsToMany(models.User, { through: 'User_Follow', foreignKey: 'artistId'})
  };
  return Artist;
};