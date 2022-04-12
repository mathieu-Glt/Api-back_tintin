const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const { Sequelize, DataTypes } = require("sequelize");
const TintinModel = require('./models/tintin');
const UserModel = require('./models/user');
const FavorisModel = require('./models/favoris');




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
    .then(_ => console.log('the database "Tintin" database has been synchronized.'))
    .then(_ => {
        console.log('the database "User" database has been synchronized.'),
        User.create({
            firstName: 'mathieu',
            lastName: 'gillet',
            email: 'mathieugt@gmail.it',
            hashPassword: 'mT/*4587/#',
            role: 'admin'
    }).then(user => console.log(user.toJSON()))
    console.log("The database 'User' initialized")
})
    .then(_ => console.log('the database "Favoris" database has been synchronized.'))

    
