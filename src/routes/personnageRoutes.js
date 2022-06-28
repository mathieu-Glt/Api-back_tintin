const { Sequelize, Datatypes } = require('sequelize');
const personnages = require('../db/mock_personnage');
const { Personnage } = require('../db/sequelizePerso');
const cors = require('cors');

module.exports = (app, slug) => {
    app.get('/test/perso', (req, res) =>{
        console.log(slug('Personnage à l\'Ouest d\'Eden', '_'))
        res.status(200).json({
            status: 1,
            msg: "Welcome to Api Personnage"
        })
    });

    app.get('/api/personnages', async (req, res) => {
        const personnagesAll = await Personnage.findAll();
        if (personnagesAll === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
        } else {
            res.status(200).json({
                status: 200,
                result: personnages
            })
        }
    })
}
