

module.exports = class HomeController {
    constructor(express,config){
        this.router = express.Router();        
        this.initRoutes(config);
    }

    initRoutes(config) {
        this.router.get('/',(req,res) => {
            res.render('home',{ machineName: config.machineName });
        });
    }
}