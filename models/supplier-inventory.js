'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplierInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupplierInventory.init({
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    SupplierId: DateTypes.INTEGER,
    InventoryId: DateTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SupplierInventory',
  });
  return SupplierInventory;
};