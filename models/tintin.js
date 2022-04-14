'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tintin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tintin.init({
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    movie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tintin',
  });
  return Tintin;
};