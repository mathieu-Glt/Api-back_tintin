const { Sequelize, Datatypes } = require('sequelize');
const herges = require('../db/mock_herge');
const { Herge } = require('../db/sequelizeHerge');
const cors = require('cors');

module.exports = (app, slug) => {
    app.get('/test/herge', (req, res) =>{
        console.log(slug('Herge à l\'Ouest d\'Eden', '_'))
        res.status(200).json({
            status: 1,
            msg: "Welcome to Api Herge"
        })
    });

    app.get('/api/herges', async (req, res) => {
        const hergesAll = await Herge.findAll();
        if (hergesAll === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
        } else {
            res.status(200).json({
                status: 200,
                result: herges
            })
        }
    })
}
