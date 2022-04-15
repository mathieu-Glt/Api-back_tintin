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
      User.hasOne(models.Favoris, {
        as: 'favoris',
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: true,
      isNumeric: false

    },
    hashPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: true,
      min: 8
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: true
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