'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tintin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favoris }) {
      // define association here
      Tintin.hasMany(models.Favoris, {
        as: 'favoris',
        foreignKey: 'tintinId'
      });
    }
  }
  Tintin.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    favorisId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tintinId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Tintin',
    timestamps: true,
    createdAt: 'creation_times_tamp',
    updatedAt: false,

  });
  return Tintin;
};