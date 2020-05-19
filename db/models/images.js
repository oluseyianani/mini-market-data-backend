'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    marketId: DataTypes.INTEGER,
    images: DataTypes.BLOB
  }, {});
  Images.associate = function(models) {
    Images.belongsTo(models.Market, {
      foreignKey: 'marketId'
    });
  };
  return Images;
};
