const { Sequelize, DataTypes, Model }  = require('sequelize');
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
            not: ["^[a-z]+$",'i'],
            set(value) {
                this.setDataValue('hashPassword', hash(value));
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: true,
        createdAt: 'creation_times_tamp',
        updatedAt: false

    });
    return User;
};
    




        



    
