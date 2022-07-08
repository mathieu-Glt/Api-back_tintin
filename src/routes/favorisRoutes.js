const { Sequelize, Datatypes } = require('sequelize')
const Favoris = require('../models/favoris')
const { Favori } = require('../db/sequelizeFavoris');

module.exports = (app) => {
    app.get('/test/favoris', (req, res)=> {
        res.status(200).json({status: 200, msg: "Welcome to API favoris"})   

})
}