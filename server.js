const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors("*"));
var slug = require('slug');
const bodyParser = require('body-parser');
app.use(bodyParser.json( {limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
const session = require('express-session');
const { Sequelize, DataTypes } = require("sequelize");
const TintinModel = require('./src/models/tintin');
const UserModel = require('./src/models/user');
const FavorisModel = require('./src/models/favoris');
const HergeModel = require('./src/models/herge');
const PersonnageModel = require('./src/models/personnage');
const tintins = require('./src/db/mock_tintin');
const users = require('./src/db/mock_user');
const favoris = require('./src/db/mock_favoris');
const herges = require('./src/db/mock_herge');
const personnages = require('./src/db/mock_personnage');
const usersRoutes = require('./src/routes/usersRoutes');
const tintinRoutes = require('./src/routes/tintinRoutes');
const favorisRoutes = require('./src/routes/favorisRoutes');
const hergeRoutes = require("./src/routes/hergeRoutes");
const personnageRoutes = require("./src/routes/personnageRoutes");
const SerieModel = require('./src/models/serie');
const series = require('./src/db/mock_serie');

const { initDb } = require("./src/db/sequelizeUser");
const serieRoutes = require("./src/routes/serieRoutes");

//const db = require("./src/models/index");



//session va gérer la création/vérification du token lors du login
app.use(session({
    secure: true,
    httpOnly: true,
    secret: 'love panda',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 3600000}
}));



const sequelize = new Sequelize('mathieugillet_api-tintin_cine', 'mathieugillet', '379a46404e062e0b0e8b7799b58095a4', {
    host: 'db.3wa.io',
    dialect: 'mysql'
})

sequelize.authenticate()
    //.then(_ => console.log('Connection to database has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database: ${error}'));


const Tintin = TintinModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Favoris = FavorisModel(sequelize, DataTypes);
const Herge = HergeModel(sequelize, DataTypes);
const Personnage = PersonnageModel(sequelize, DataTypes);
const Serie = SerieModel(sequelize, DataTypes);

sequelize.sync({force: false})
    .then(_ => {
        console.log('the database "Tintin" database has been synchronized.'),
    
    tintins.map(tintin => {
        Tintin.create({
            title: tintin.title,
            picture: tintin.picture,
            synopsis: tintin.synopsis,
            movie: tintin.movie,
            tintinId: tintin.tintinId,
            favorisId: tintin.favorisId,
            rating: tintin.rating,
        }).then(tintin => console.log(tintin.toJSON()))
        console.log("The database 'Tintin' initialized")
    })})
/*.then(_ => {
        console.log('the database "User" database has been synchronized.'),

    users.map(user => {
        User.create({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            hashPassword: user.hashPassword,
            role: user.role,
            userId: 1,
    }).then(user => console.log(user.toJSON()))
    console.log("The database 'User' initialized")
    //initDb(Favoris);
    //endpoints


})})*/
.then(_ => {
    console.log('the database "Favoris" database has been synchronized.'),

    favoris.map(favori => {
        Favoris.create({
            userId: favori.userId,
            tintinId: favori.tintinId
        }).then(favori => console.log(favori.toJSON()))
        console.log("The database 'Favoris' initialized")


})})
.then(_ => {
    console.log('the database "Herge" database has been synchronized.'),

    herges.map(herge => {
        Herge.create({
            firstName: herge.firstName,
            lastName: herge.lastName,
            nomArtiste: herge.nomArtiste,
            picture: herge.picture,
            nationalité: herge.nationalité,
            date_de_naissance: herge.date_de_naissance,
            date_de_décès: herge.date_de_décès,
            presentation: herge.presentation,
            aventures_de_tintin: herge.aventures_de_tintin
        }).then(herge => console.log(herge.toJSON()))
        console.log("The database 'herge' initialized")
    })})
    .then(_ => {
        console.log('the database "Personnage" database has been synchronized.'),

        personnages.map(perso => {
            Personnage.create({
                presentation: perso.presentation,
                suite: perso.suite,
                picture: perso.picture,
                age: perso.age,
                personnalité: perso.personnalité,
                personnalité_suite: perso.personnailté_suite
            }).then(perso => console.log(perso.toJSON()))
            console.log("The database 'personnage' initialized")

        })})
        .then(_ => {
            console.log('the database "Serie" database has been synchronized.'),
    
            series.map(serie => {
                Serie.create({
                    nom: serie.nom,
                    prenom: serie.prenom,
                    picture: serie.picture,
                    profession: serie.profession,
                    personnage: serie.personnage,
                    personnage_suite: serie.personnage_suite,
                }).then(serie => console.log(serie.toJSON()))
                console.log("The database 'serie' initialized")
    
            })})
    


usersRoutes(app);
tintinRoutes(app, slug);
serieRoutes(app, slug);
hergeRoutes(app, slug);
personnageRoutes(app, slug);
favorisRoutes(app);






    

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

    
