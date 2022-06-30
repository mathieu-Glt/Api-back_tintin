const { Sequelize, Datatypes } = require('sequelize')
const users = require('../db/mock_user');
const { User } = require('../db/sequelizeUser');
const { check, validationResult } = require('express-validator')



module.exports = (app) => {

    //route de test
    app.get('/test/user', (res) => {
        res.status(200).json({
            status: 1,
            msg: "Welcome to API User"
        })

    });
    //route de récupération de tous les users
    app.get('/api/users', async (res) => {
        const users = await User.findAll();
        if (users === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
        } else {
            res.status(200).json({
                status: 200,
                result: users
            })
        }
    })

    //route de récupération d'un seul user'
    app.get('/api/users/:id', async (req, res) => {
        const userId = await User.findByPk(req.params.id);
        if (userId === null) {
            res.status(404).json({
                status: 404,
                msg: 'Page not found'
            })
        } else {
            res.status(200).json({
                status: 200,
                result: user
            })
        }
    })

    //route de récupération d'un seul user'
    app.post('/api/users', async (req, res) => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            hashPassword: req.body.hashPassword,
            role: "user"
        })
            .then(user => {
                const message = `The user ${req.body.firstName} ${req.body.lastName} has been created.`;
                res.json({ message, data: user })
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

    //route de login d'un utilisateur
    app.post('api/user/login',
        check('email', 'This email must correspond to a valid email').isEmail(),
        check('firstName', 'This firstName to be required and must to be write with aplha character').isAlpha().exists(),
        check('lastname', 'This lastName to be required and must to be write with aplha character ').isAlpha().exists(),
        check('hashPassword', 'Password must to be min 4 characters and Alpha numeric').isLength({ min: 4 }).isAlphanumeric(),
        async (req, res, next) => {
            const userEmail = { emailAddress: email };
            const { email } = req.body;
            let foundUser = await User.findOne({ email: req.body.email })
            if(userEmail === 0) {
                res.json({
                    status: 404,
                    msg: "Email does not exists"
                })
            }
            let same = await bcrypt.compare(req.body.password, userEmail[0].password);
            if(same) {
                let infos = {id: userEmail[0].id, email: userEmail[0].email}
                let token = jwt.sign(infos, secret);

                res.json({status: 200, msg: "connected", token: token, userEmail: userEmail[0]})
            } else {
                res.json({status: 401, msg: "bad password"})
            }
        })
            
            
            
            //code ci-dessous à utiliser pour la route register uniquement
            /*if(foundUser === 0) {
                let errors = [];
                errors.push({msg: "Email already exists"});
                res.render('newAccount',{
                    title:'Signup',
                    errors:errors
                })
            } else {
    
                User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    hashPassword: req.body.hashPassword,
                }, function (err, result) {
                    if(err){
                        req.json({
                            msg: "error...."
                        }) 
                    } else if (result) {
                        status: 200,
                        result: result
                    }*/
        


//route de modification d'un user
app.put('/api/users/:id', async (req, res) => {
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: req.body.hashPassword,
    }, {
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

// route de suppression d'un user
app.delete('/api/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    User.destroy({
        where: { id: req.params.id }
    })
        .then(_ => {
            const message = `The user ${user.firstName} ${user.lastName} has been deleted !`
            res.json({ message, data: user })
        })
})
            
            
            
            
            
    






}