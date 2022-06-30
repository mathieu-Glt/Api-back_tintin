const { Sequelize, DataTypes } = require('sequelize')
const TintinModel = require('../models/tintin')
const tintins = require('./mock_tintin')
  
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})
  
const Tintin = TintinModel(sequelize, DataTypes);
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    tintins.map(tintin => {
      Tintin.create({
        title: tintin.title,
        picture: tintin.picture,
        synopsis: tintin.synopsis,
        movie: tintin.movie,
        favorisId: tintin.favorisId,
        tintinId: tintin.tintinId,
        rating: tintin.rating,
        types: tintin.types.join()
      })
      //.then(tintin => console.log(tintin.toJSON()))
    })
    console.log('La table Tintins a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Tintin
}