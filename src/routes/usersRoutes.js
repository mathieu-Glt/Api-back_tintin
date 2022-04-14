const { Sequelize, Datatypes } = require('sequelize')
const User = require('../../models/user')

module.exports = (app, db) => {
    console.log('okayy')
    app.get('/', (req, res)=> {
        res.json({status: 200, msg: "Todo bien"})   

})





}