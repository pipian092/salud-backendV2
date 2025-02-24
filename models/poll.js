'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Poll.belongsTo(models.User)
      Poll.belongsTo(models.Question)
      Poll.belongsTo(models.Community)
      Poll.belongsTo(models.Survey)
      
    }
  }
  Poll.init({
    description: DataTypes.STRING,
    response: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Poll',
  });
  return Poll;
};