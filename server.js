const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
var slug = require('slug')
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require("sequelize");
const TintinModel = require('./src/models/tintin');
const UserModel = require('./src/models/user');
const FavorisModel = require('./src/models/favoris');
const tintins = require('./src/db/mock_tintin');
const users = require('./src/db/mock_user');
const favoris = require('./src/db/mock_favoris');
const usersRoutes = require('./src/routes/usersRoutes');
const tintinRoutes = require('./src/routes/tintinRoutes');
const favorisRoutes = require('./src/routes/favorisRoutes');
//const db = require("./src/models/index");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


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

sequelize.sync({force: true})
    .then(_ => {
        //console.log('the database "Tintin" database has been synchronized.'),
    
    tintins.map(tintin => {
        Tintin.create({
            title: tintin.title,
            picture: tintin.picture,
            synopsis: tintin.synopsis,
            movie: tintin.movie,
            tintinId: 3,
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
            role: user.role,
            userId: 1,
    }).then(user => console.log(user.toJSON()))
    console.log("The database 'User' initialized")
    app.get('/', (req, res)=>{
        res.json({status: 200, msg: "Welcome to API REST"})
    })
    console.log("The database 'Favoris' initialized"),
    Favoris.create({
        tintinId: favoris.tintinId,
        userId: favoris.userId,
    })
    .then(favoris => console.log(favoris.toJSON()))
    //endpoints
    usersRoutes(app);
    tintinRoutes(app, slug);
    favorisRoutes(app);


})




})



    

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

    
