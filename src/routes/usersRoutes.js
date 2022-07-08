const { Sequelize, Datatypes } = require('sequelize')
const users = require('../db/mock_user');
const { User } = require('../db/sequelizeUser');
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = "pitichat";
const withAuth = require('../../withAuth');



module.exports = (app) => {

    //route de test
    app.get('/test/user', (res) => {
        res.status(200).json({
            status: 200,
            msg: "Welcome to API User"
        })

    });

    // enregistrement d'un menbre
    app.post('/register',
        check('email', 'This email must correspond to a valid email ').isEmail(),
        check('firstName', 'This firstName to be required and must to be write with aplha character').isAlpha().exists(),
        check('lastName', 'This lastName to be required and must to be write with aplha character ').isAlpha().exists(),
        check('hashPassword', 'hashPassword must to be min 8 characters and Alpha numeric').isLength({ min: 8 }).isAlphanumeric(),
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(401).json({
                    status: 401,
                    errors: errors.array()
                })
            } else {
                console.log('at here')
                console.log(req.body.email)
                console.log(req.body.firstName)
                console.log(req.body.lastName)
                console.log(req.body.hashPassword)
                //on vérifie si l'email existe déjà
                let check = await User.findOne({ where: { email: req.body.email } })
                console.log(check)

                // si il n'existe pas
                if (check === null) {
                    // on enregistre l'user
                    const userCreate = User.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        hashPassword: req.body.hashPassword,
                        role: "user"
                    })
                    console.log(userCreate)
                } else {
                    console.log('exists already')
                    // si il existe 
                    res.json({
                        status: 401,
                        msg: "Your email is already registered"
                    })
                }
            }
            res.json({ status: 200, msg: "You are registered", session: req.session });
        })





    //route de login d'un utilisateur
    app.post('/login',
        check('email', 'This email must correspond to a valid email').isEmail(),
        check('hashPassword', 'Password must to be min 4 characters and Alpha numeric').isLength({ min: 4 }).isAlphanumeric(),
        async (req, res, next) => {
            //on check si l'user correspond à un user de la bdd
            let user = await User.findOne({ where: { email: req.body.email } })
            /// si on renvoit un tableau vide (il n'existe pas)
            console.log(user.hashPassword)
            console.log(user.id)

            if (!user) {
                //on envoi une reponse d'erreur
                res.json({
                    status: 404,
                    msg: "Account doesn't exists"
                })
            }
            //on compare les deux mots de passes
            let same = await bcrypt.compare(req.body.hashPassword, user.hashPassword);
            // si ça correspond
            console.log('compare echec !')
            if (same) {
                console.log('bcrypté fait !')
                //on va créer une const payload on stock les valeur qu'on va glisser dans le token
                const payload = { email: req.body.email, id: user.id }
                console.log(payload)
                //on crée le token avec sa signature secret
                let token = jwt.sign(payload, secret);
                console.log(token)
                //reponse json avec le token qu'on renvoi vers le front
                res.json({ status: 200, token: token, user_id: user.id, session: req.session })
            } else {
                res.json({ status: 401, msg: "bad password" })
            }

        });

    //route get de logout
    app.get('/logout', async (req, res) => {
        req.session.destroy((err) => {
            // cannot access session here
            res.json({
                status: 200,
                msg: "Your session is deconnected"
            });
        })
    })

}














