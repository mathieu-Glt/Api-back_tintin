const { Sequelize, Datatypes } = require('sequelize')
const User = require('../models/user')

module.exports = (app, db) => {
    app.get('/test/user', (req, res)=> {
        res.json({status: 200, msg: "Welcome to API users"})   

})





}