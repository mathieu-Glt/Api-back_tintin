const { Sequelize, DataTypes, Model }  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tintin extends Model {

    }

    Tintin.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        synopsis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        movie: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: true,
        createdAt: 'creation_times_tamp',
        updatedAt: false

    })

}
        



    
