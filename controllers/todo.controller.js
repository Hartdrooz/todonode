

class TodoController {
    constructor(express,dataService){
        this.router = express.Router();        
        this.initRouter(dataService);                
    }

    initRouter(dataService){
        this.router.get('/',async (req,res) => {
            try {
                const todos = await dataService.all();
                res.json(todos);
            } catch (error) {
                console.log(`Error ${error}`);
                res.status(500);
                res.json({});
            }
        });
    }
}

module.exports = TodoController;