const { Sequelize, DataTypes } = require('sequelize');
const HergeModel = require('../models/herge');
const herges = require('./mock_herge');
  
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})


const Herge = HergeModel(sequelize, DataTypes);


const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
      herges.map(herge => {
        Herge.create({
            firstName: herge.firstName,
            lastName: herge.lastName,
            nomArtiste: herge.nomArtiste,
            picture: herge.picture,
            nationalité: herge.nationalité,
            date_de_naissance: herge.date_de_naissance,
            date_de_décès: herge.date_de_décès,
            presentation: herge.presentation,
            aventures_de_tintin: herge.aventures_de_tintin,
            types: herge.types.join()
        })
        //.then(tintin => console.log(tintin.toJSON()))
      })
      console.log('La table Herge a bien été initialisée !')
    })
  }
    
  module.exports = { 
    initDb, Herge
  }
