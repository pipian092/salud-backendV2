'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monitoreo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Monitoreo.hasMany(models.CuidadorPrimario)
      Monitoreo.hasMany(models.DetalleNino)
      Monitoreo.hasMany(models.EmbarazoCaptado)
      Monitoreo.hasMany(models.InscritoRnp)
      Monitoreo.hasMany(models.Ninos)
      Monitoreo.hasMany(models.NumeroFamAtendidas)
      Monitoreo.hasMany(models.Partos)
      Monitoreo.hasMany(models.GrupoEtnico)
      Monitoreo.hasMany(models.NinoEvaluados)
      Monitoreo.hasMany(models.NinoDesnutricion)
      Monitoreo.hasMany(models.Capacitacion)
      Monitoreo.hasMany(models.NumeroIntervenciones)
      Monitoreo.hasMany(models.Seguimiento)
      Monitoreo.hasMany(models.GuiasDesarrollada)
      Monitoreo.hasMany(models.Guias)
      Monitoreo.hasMany(models.Vacunacion)
      Monitoreo.belongsTo(models.Community)
      Monitoreo.belongsTo(models.User)
    }
  }
  Monitoreo.init({
    famPriorizadas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Monitoreo',
  });
  return Monitoreo;
};