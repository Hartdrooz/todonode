const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Get class definition
const Configuration = require('./shared/config');
const configuration = new Configuration();

const HomeController = require('./controllers/home.controller');
const TodoController = require('./controllers/todo.controller');
const DataService = configuration.inMemory == 1
                  ? require('./service/data-memory.service') 
                  : require('./service/data.service');

// Create instance of class
const dataService = new DataService();


// Set middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views','pages'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const homeController = new HomeController(express,configuration);
const todoController = new TodoController(express,dataService);

// Set routes
app.use('/',homeController.router);
app.use('/api/todo',todoController.router);

app.listen(configuration.port,() => {
    console.log(`Server listening on port ${configuration.port}`);
});

