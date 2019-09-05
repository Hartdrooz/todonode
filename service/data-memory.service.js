

class DataMemoryService {    
    constructor(){
        this.todos = require('../data/in-memory');
        this.ids = 3;
    }
    all(){
        console.log(this.todos);
        return new Promise((resolve,reject) => {
            resolve(this.todos);
        });        
    }
    add(todo){
        todo.id = this.ids;
        this.todos.push(todo);
        this.ids++;        
    }
    update(){}
}

module.exports = DataMemoryService;