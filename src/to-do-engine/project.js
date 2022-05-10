export default class PROJECT  {
    constructor (name, description) {
        this.name = name;
        this.description = description;
        this.todo_list = [];
    }

    addToDos (todo) {
        this.todo_list.push(todo);
    }

    removeToDo (todo) {
        this.todo_list.splice(todo.id, 1)
    }
}