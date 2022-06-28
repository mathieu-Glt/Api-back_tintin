'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personnage extends Model {
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
  Personnage.init({
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    presentation: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    personnalité: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    personnalité_suite: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    age: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suite: {
      type: DataTypes.TEXT,
      allowNull: true
    }


}, {
    sequelize,
    modelName: 'Personnage',
    timestamps: false,
    createdAt: false,
    updatedAt: false,

  });
  return Personnage;
};