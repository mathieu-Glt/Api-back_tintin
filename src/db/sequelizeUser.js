const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const users = require('./mock_user')


const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})


const User = UserModel(sequelize, DataTypes);
const initDb = () => {
  console.log('okiiiii')

    return sequelize.sync({force: true}).then(_ => {
      users.map(user => {
        User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          hashPassword: user.hashPassword,
          role: user.role,
          types: user.types.join()
        })
        .then(user => console.log(user.toJSON()))
      })
      console.log('La table Users a bien été initialisée !')
    })
  }
    
  module.exports = { 
    initDb, User
  }