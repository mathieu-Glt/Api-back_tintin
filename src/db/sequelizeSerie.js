const { Sequelize, DataTypes } = require('sequelize')
const SerieModel = require('../models/serie')
const series = require('./mock_serie')
  
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})
  
const Serie = SerieModel(sequelize, DataTypes);
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    series.map(serie => {
      Serie.create({
        nom: serie.nom,
        prenom: serie.prenom,
        picture: serie.picture,
        profession: serie.profession,
        personnage: serie.personnage,
        personnage_suite: serie.personnage_suite,
        types: serie.types.join()
      })
      //.then(tintin => console.log(tintin.toJSON()))
    })
    console.log('La table series a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Serie
}