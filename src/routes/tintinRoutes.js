const { Sequelize, Datatypes } = require('sequelize')
const Tintin = require('../../models/tintin').Tintin

module.exports = (app, db) => {
    app.get('/test/tintin', (req, res)=> {
        res.json({status: 200, msg: "Welcome to API tintin"})   

    });

    app.get('/api/tintins', (req, res) => {
        Tintin.findAll()
        .then(tintins => {
            const msg = "The list'movies'tintin has been successfully recovered."
            res.json({status: 200, msg, data: tintins})
        })
        .catch(err => {
            message:
                err.message || "Some error occured while retrieving tutorials"
        })
    })







}