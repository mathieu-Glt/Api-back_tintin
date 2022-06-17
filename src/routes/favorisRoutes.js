const { Sequelize, Datatypes } = require('sequelize')
const Favoris = require('../models/favoris')

module.exports = (app) => {
    app.get('/test/favoris', (res)=> {
        res.json({status: 200, msg: "Welcome to API favoris"})   

})

app.post('/api/users', async (req, res) => {
    Favoris.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: req.body.hashPassword,
        role: "user"})
        .then(user => {
            const message = `The user ${req.body.firstName} ${req.body.lastName} has been created.`;
            res.json({ message, data: user})
        }).catch(error => {
            let errorsList = [];
            error.errors.map(item => {
            errorsList.push(item.message)
                
            })
            console.log(errorsList)
            res.status(400).json({
            error: errorsList 
            })
        })

    }) 






}