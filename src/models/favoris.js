'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favoris extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favoris }) {
      // define association here
      Favoris.belongsTo(Favoris, {foreignKey: 'userId', as: 'user'});

      Favoris.hasMany(Favoris, {foreignKey: 'tintinId', as: 'tintins'});
    }
  }
  Favoris.init({
    tintinId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    }


  }, {
    sequelize,
    modelName: 'Favoris',
    timestamps: true,
    createdAt: 'creation_times_tamp',
    updatedAt: false,

  });
  return Favoris;
};