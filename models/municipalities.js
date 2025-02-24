'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipalities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Municipalities.belongsTo(models.Department)
    }
  }
  Municipalities.init({
    nameM: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Municipalities',
  });
  return Municipalities;
};