'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodCategory = sequelize.define('FoodCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {});
  FoodCategory.associate = function(models) {
    FoodCategory.hasMany(models.Market, {
      foreignKey: 'foodCategory'
    });
  };
  return FoodCategory;
};
