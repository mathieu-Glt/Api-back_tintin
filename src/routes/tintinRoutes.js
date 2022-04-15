const { Sequelize, Datatypes } = require('sequelize')
const Tintin = require('../models/tintin');
//const Tintin = require('../models/tintin').Tintin

module.exports = (app, db) => {
    app.get('/test/tintin', (req, res)=> {
        res.json({status: 200, msg: "Welcome to API tintin"})   

    });

    app.get('/api/tintins', async (req, res) => {
        const tintin = await Tintin.findByPk(2);
        if (tintin === null) {
            console.log('Not found!');
          } else {
            console.log(tintin instanceof Tintin); // true
            // Its primary key is 123
          }    })







}