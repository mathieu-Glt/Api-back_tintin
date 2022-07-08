const { Sequelize, Datatypes } = require('sequelize');
const tintins = require('../db/mock_tintin');
const { Tintin } = require('../db/sequelizeTintin');
const cors = require('cors');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');

//const Tintin = require('../models/tintin');
//const Tintin = require('../models/tintin').Tintin
const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})


module.exports = (app, slug) => {
    const tintin = require('../models/tintin');

    app.get('/test/tintin', (req, res)=> {
        console.log(slug('Tintin à l\'Ouest d\'Eden', '_'))
        res.status(200).json({
                    status: 1,
                    msg: "Welcome to API Tintin"
                })  

    });

    app.get('/api/tintins', async (req, res) => {
        const tintinsAll = await Tintin.findAll();
        if (tintinsAll === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })

        
            } else {
                res.status(200).json({
                    status: 200, 
                    result: tintins
                })
            }})
            /*where: { 
                rating: 5,
                rating: 4
             }});
             console.log(rateMovie)*/


            app.get('/api/tintins/rating', async (req, res) => {
                /*const rateMovie = await Tintin.findAll({ 
                    limit: 5,
                    order: [
                        ['rating', 'DESC']
                    ]  
                    });
                     console.log(rateMovie)*/
                     const tintinsAll = await sequelize.query('SELECT DISTINCT title, picture, synopsis, movie, rating FROM Tintins ORDER BY rating DESC LIMIT 5', { type: QueryTypes.SELECT})
                    console.log(tintinsAll)
                if (tintinsAll === null) {
                    res.status(404).json({
                        status: 404,
                        msg: 'Request not found'
                    })
                } else {
                    res.status(200).json({
                        status: 200,
                        msg: 'request has succeeded',
                        result: tintinsAll,
                    })
                }
            })
        

    app.get('/api/tintins/name', async (req, res) => {
        const tintin = await Tintin.findOne({ where: { title: 'Coke en stock'} });
        console.log(tintin)
        if (tintin === null) {
            res.status(404).json({
                status: 404,
                msg: 'Request not found'
            })
        } else {
            res.status(200).json({
                status: 200,
                msg: 'request has succeeded',
                result: tintin
            })
        }
    })

    app.get('/api/tintins/:id', async (req, res) => {
        const tintinId = await Tintin.findByPk(req.params.id);
        if (tintinId === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
            } else {
                res.status(200).json({
                    status: 200, 
                    result: tintin
                })
            }})

    app.post('/api/tintins', async (req, res) => {
        //console.log(req.body)
            Tintin.create({
                title: req.body.title,
                picture: req.body.picture,
                synopsis: req.body.synopsis,
                movie: req.body.movie})
            .then(tintin => {
                const message = `The movie ${req.body.title} has been created.`;
                res.json({ message, data: tintin})
            })

    })

    app.put('/api/tintins/:id', async (req, res) => {
        //console.log(req.body)
            Tintin.update({
                title: req.body.title,
                picture: req.body.picture,
                synopsis: req.body.synopsis,
                movie: req.body.movie,
                rating: req.body.rating
            },{
                where: {
                    id: req.params.id
                }
            }
            )
            .then(tintin => {
                res.status(200).json({
                    status: 1,
                    message: `The movie ${req.body.title} has been created.`
                }).catch(error => {
                    res.status(500).json({
                        status: 0,
                        message: "Failed to updated the movie",
                        data: error
                    })
                })
            })

    })

    app.delete('/api/tintins/:id', async (req, res) => {
        Tintin.destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.status(200).json({
                status: 1,
                message: "Movie has been deleted succesfully !",
            }).catch(error => {
                res.status(500).json({
                    status: 0,
                    message: "Failed to delete movie",
                    data: error
                })
            });
        })
    })

    







}