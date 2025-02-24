'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ninos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ninos.belongsTo(models.Monitoreo)
    }
  }
  Ninos.init({
    conLactancia: DataTypes.INTEGER,
    sinLactancia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ninos',
  });
  return Ninos;
};