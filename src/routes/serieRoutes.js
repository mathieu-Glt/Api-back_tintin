const { Sequelize, Datatypes } = require('sequelize');
const series = require('../db/mock_serie');
const { Serie } = require('../db/sequelizeSerie');
const cors = require('cors');


module.exports = (app, slug) => {
    app.get('/test/serie', async (req, res)=> {
        console.log(slug('Serie à l\'Ouest d\'Eden', '_'))
        res.status(200).json({
                    status: 1,
                    msg: "Welcome to API Serie"
                })  

    });

    app.get('/api/series', async (req, res) => {
        const seriesAll = await Serie.findAll();
        if (seriesAll === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })

        
            } else {
                res.status(200).json({
                    status: 200, 
                    result: series
                })
            }})


    app.get('/api/series/:id', async (req, res) => {
        const serieId = await Serie.findByPk(req.params.id);
        if (serieId === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
            } else {
                res.status(200).json({
                    status: 200, 
                    result: serieId
                })
            }})

    app.post('/api/series', async (req, res) => {
        //console.log(req.body)
            Serie.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                profession: req.body.profession,
                personnage: req.body.personnage
            })
            .then(serie => {
                const message = `The character ${req.body.nom} has been created.`;
                res.json({ message, data: serie})
            })

    })

    app.put('/api/series/:id', async (req, res) => {
        //console.log(req.body)
            Serie.update({
                nom: req.body.nom,
                prenom: req.body.prenom,
                profession: req.body.profession,
                personnage: req.body.personnage
            },{
                where: {
                    id: req.params.id
                }
            }
            )
            .then(serie => {
                res.status(200).json({
                    status: 1,
                    message: `The character ${req.body.nom} has been created.`
                }).catch(error => {
                    res.status(500).json({
                        status: 0,
                        message: "Failed to updated the movie",
                        data: error
                    })
                })
            })

    })

    app.delete('/api/series/:id', async (req, res) => {
        Serie.destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.status(200).json({
                status: 1,
                message: "The character has been deleted succesfully !",
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