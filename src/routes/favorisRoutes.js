const { Sequelize, Datatypes } = require('sequelize')
const Favoris = require('../models/favoris')

module.exports = (app, db) => {
    app.get('/test/favoris', (req, res)=> {
        res.json({status: 200, msg: "Welcome to API favoris"})   

})





}