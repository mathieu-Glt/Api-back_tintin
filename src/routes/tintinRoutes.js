const { Sequelize, Datatypes } = require('sequelize');
const tintins = require('../db/mock_tintin');
const { Tintin } = require('../db/sequelizeTintin')
//const Tintin = require('../models/tintin');
//const Tintin = require('../models/tintin').Tintin

module.exports = (app, db) => {
    app.get('/test/tintin', (req, res)=> {
        res.status(200).send("Welcome to API Tintin")  

    });

    app.get('/api/tintins', async (req, res) => {
        const tintins = await Tintin.findAll();
        console.log(tintins)
        if (tintins === null) {
            res.status(404).send('Page not found')
            } else {
                res.status(200).send({status: 200, result: tintins})
            }})

    app.get('/api/tintins/:id', async (req, res) => {
        const tintin = await Tintin.findByPk(req.params.id);
        console.log(tintin)
        if (tintin === null) {
            res.status(404).send('Page not found')
            } else {
                res.status(200).send({status: 200, result: tintin})
            }})

    app.post('/api/tintins', async (req, res) => {
        console.log(req.body)
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
        console.log(req.body)
            Tintin.update({
                title: req.body.title,
                picture: req.body.picture,
                synopsis: req.body.synopsis,
                movie: req.body.movie
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
                message: "Movie has been deleted succesfully !"
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