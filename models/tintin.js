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
      Tintin.belongsTo(models.Favoris, {
        as: 'favoris',
        foreignKey: 'movieId'
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
    tintinId: {
      type: DataTypes.INTEGER
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