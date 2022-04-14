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
    static associate(models) {
      // define association here
      Favoris.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });

      Favoris.hasMany(models.Tintin, {
        as: 'tintin',
        foreignKey: 'movieId'
      });
    }
  }
  Favoris.init({
    userId: {
      type: DataTypes.INTEGER
    },
    tintinId: {
      type: DataTypes.INTEGER
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