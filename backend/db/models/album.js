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
  };
  return Album;
};