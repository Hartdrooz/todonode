

class DataMemoryService {    
    constructor(){
        this.todos = require('../data/in-memory');
        this.ids = 3;
    }
    all(){
        return this.todos;
    }
    add(todo){
        todo.id = this.ids;
        this.todos.push(todo);
        this.ids++;        
    }
    update(){}
}