const bcrypt = require('bcrypt');
const saltRounds = 10;
//onst yourPassword = hashPassword;
const { Sequelize, DataTypes, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            get() {
                const rawValue = this.getDataValue('lastName');
                return rawValue ? rawValue.toUpperCase() : null;
            }
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true, // checks for email format (foo@bar.com)
            allowNull: false
        },
        hashPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            min: 8,
            not: ["^[a-z]+$", 'i'],
            /*set() {
                this.setDataValue('#/96mG12');
            }*/
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
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
    User.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    }
    return User;

};










