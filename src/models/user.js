'use strict';
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Favoris, {foreignKey: 'favorisId', as: 'favoris'});
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        isEmail: true
      }
    },
    hashPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: true,
      notEmpty: true,
      is: ["^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"],
      min: 8
    },
    role: {
      type: DataTypes.STRING,
    },
    favorisId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'creation_times_tamp',
    updatedAt: false,
    hooks: {
      beforeCreate: async (user) => {
        if (user.hashPassword) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.hashPassword = bcrypt.hashSync(user.hashPassword, salt);
        }
    },
      beforeUpdate: async (user) => {
        if (user.hashPassword) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.hashPassword = bcrypt.hashSync(user.hashPassword, salt);
        }
    }

    },
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.hashPassword);

    }
  }

  });
  return User;
};