'use strict';
module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define('Market', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    foodCategory: DataTypes.STRING,
    long: DataTypes.GEOMETRY,
    lat: DataTypes.GEOMETRY
  }, {});
  Market.associate = function(models) {
    Market.belongsTo(models.FoodCategory, {
      foreignKey: 'foodCategory'
    });
  };
  return Market;
};
