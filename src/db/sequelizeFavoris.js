const { Sequelize, DataTypes } = require('sequelize');
const favoris = require('../models/favoris');
const FavorisModel = require('../models/favoris')
  
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})
  
const Favoris = FavorisModel(sequelize, DataTypes);
  /*
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    favoris.map(favoris => {
      Favoris.create({
        tintinId: favoris.title,
        userId: tintin.picture,
        types: tintin.types.join()
      })
      //.then(favoris => console.log(favoris.toJSON()))
    })
    console.log('La table Favoris a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Favoris
}*/