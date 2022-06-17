const { Sequelize, Datatypes } = require('sequelize')
const users = require('../db/mock_user');
const { User } = require('../db/sequelizeUser')


module.exports = (app) => {
    app.get('/test/user', (res)=> {
        res.status(200).json({
                        status: 1,
                        msg:   "Welcome to API User"
                    })  

    });

    app.get('/api/users', async (res) => {
        const users = await User.findAll();
        console.log(users)
        if (users === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'})
        } else {
            res.status(200).json({
                status: 200, 
                result: users})
        }})

        app.get('/api/users/:id', async (req, res) => {
            const user = await User.findByPk(req.params.id);
            console.log(user)
            if (user === null) {
                res.status(404).json({
                    status: 404,
                    msg: 'Page not found'
                })
                } else {
                    res.status(200).json({
                        status: 200, 
                        result: user})
                }})

        app.post('/api/users', async (req, res) => {
                User.create({
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

                app.put('/api/users/:id', async (req, res) => {
                        User.update({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            hashPassword: req.body.hashPassword,
                                },{
                            where: {
                                id: req.params.id
                            }
                        })
                        .then(user => {
                            res.status(200).json({
                                status: 1,
                                message: `The user ${req.body.firstName} ${req.body.lastName} has been updated.`
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
                })


                app.delete('/api/users/:id', async (req, res) => {
                    const user = await User.findByPk(req.params.id);
                        User.destroy({
                            where: { id: req.params.id }
                        })
                        .then(_ => {
                            const message = `The user ${user.firstName} ${user.lastName} has been deleted !`
                            res.json({message, data: user})
                        })
                    })
            
            
            
            
            
    






}