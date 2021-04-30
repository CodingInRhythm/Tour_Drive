'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    albumArt: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.Artist, { foreignKey: 'artistId'})
    Album.hasMany(models.Song, { foreignKey: 'albumId'})

    const columnMapping = { 
      through: 'User_Collection', 
      foreignKey: 'albumId', 
      otherKey: 'userId'
    }
  
    Album.belongsToMany(models.User, columnMapping)
  }
  return Album;
};