'use strict';
module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define('Market', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.GEOMETRY,
    foodCategory: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'FoodCategories',
        key: 'id',
      },
    },
  }, {});
  Market.associate = function(models) {
    Market.belongsTo(models.FoodCategory, {
      foreignKey: 'foodCategory'
    });
  };
  return Market;
};
