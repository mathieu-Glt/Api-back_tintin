const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const { Sequelize, DataTypes } = require("sequelize");
const TintinModel = require('./models/tintin');
const UserModel = require('./models/user');
const FavorisModel = require('./models/favoris');
const tintins = require('./src/db/mock_tintin');
const users = require('./src/db/mock_user');
const user = require("./models/user");


const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(_ => console.log('Connection to database has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database: ${error}'));


const Tintin = TintinModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Favoris = FavorisModel(sequelize, DataTypes);

sequelize.sync({force: true})
    .then(_ => {
        console.log('the database "Tintin" database has been synchronized.'),
    
    tintins.map(tintin => {
        Tintin.create({
            title: tintin.title,
            picture: tintin.picture,
            synopsis: tintin.synopsis,
            movie: tintin.movie
        }).then(tintin => console.log(tintin.toJSON()))
        console.log("The database 'Tintin' initialized")
    })})
    .then(_ => {
        console.log('the database "User" database has been synchronized.'),

    users.map(user => {
        User.create({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            hashPassword: user.hashPassword,
            role: user.role
    }).then(user => console.log(user.toJSON()))
    console.log("The database 'User' initialized")
})

    })
    .then(_ => console.log('the database "Favoris" database has been synchronized.'))

    
