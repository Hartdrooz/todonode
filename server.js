const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Get class definition
const Configuration = require('./shared/config');
const HomeController = require('./controllers/home.controller');

// Create instance of class
const configuration = new Configuration();

// Set middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views','pages'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const homeRoutes = new HomeController(express,configuration);

// Set routes
app.use('/',homeRoutes.router);

app.listen(configuration.port,() => {
    console.log(`Server listening on port ${configuration.port}`);
});

