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
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashPassword: DataTypes.STRING,
    role: DataTypes.STRING
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