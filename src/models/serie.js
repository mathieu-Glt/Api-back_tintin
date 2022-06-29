'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate({ Favoris }) {
      // define association here
      /*Serie.hasMany(models.Favoris, {
        as: 'favoris',
        foreignKey: 'tintinId'
      });
    }*/
  }
  Serie.init({
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    personnage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    personnage_suite: {
      type: DataTypes.TEXT,
      allowNull: true
    }

  }, {
    sequelize,
    modelName: 'Serie',
    timestamps: true,
    createdAt: 'creation_times_tamp',
    updatedAt: false,

  });
  return Serie;
};