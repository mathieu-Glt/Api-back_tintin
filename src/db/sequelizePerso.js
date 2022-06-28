const { Sequelize, DataTypes } = require('sequelize')
const PersonnageModel = require('../models/personnage')
const personnages = require('./mock_personnage')
  
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})


const Personnage = PersonnageModel(sequelize, DataTypes);


const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        personnages.map(perso => {
        Personnage.create({
            presentation: perso.presentation,
            suite: perso.suite,
            picture: perso.picture,
            age: perso.age,
            personnalité: perso.personnalité,
            personnalité_suite: perso.personnailté_suite,
            types: perso.types.join()
        })
        .then(perso => console.log(perso.toJSON()))
      })
      console.log('La table Personnage a bien été initialisée !')
    })
  }
    
  module.exports = { 
    initDb, Personnage
  }