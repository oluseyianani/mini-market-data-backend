'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    marketId: {
      type: DataTypes.INTEGER,
      required: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Markets',
        key: 'id',
      },
    },
    image: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    Images.belongsTo(models.Market, {
      foreignKey: 'marketId'
    });
  };
  return Images;
};
