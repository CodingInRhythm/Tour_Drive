'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    songLink: DataTypes.TEXT,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    songLength: DataTypes.STRING,
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, { foreignKey: 'artistId'})
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
  };
  return Song;
};