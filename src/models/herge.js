'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Herge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate({ Tintin }) {
      // define association here
      Herge.hasMany(models.Favoris, {
        as: 'favoris',
        foreignKey: 'tintinId'
      });
    }*/
  }
  Herge.init({
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomArtiste: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_de_naissance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nationalité: {
        type: DataTypes.STRING,
        allowNull: true
    },
    presentation: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    aventures_de_tintin: {
      type: DataTypes.TEXT,
      allowNull: true
  },

    date_de_décès: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    sequelize,
    modelName: 'Herge',
    timestamps: false,
    createdAt: false,
    updatedAt: false,

  });
  return Herge;
};