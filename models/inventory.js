'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsToMany(models.Supplier, {
        through : models.SupplierInventory
      })
      Inventory.hasMany(models.Sale)
    }
  }
  Inventory.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    threshold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};