import PROJECT from './to-do-engine/project';
import TODO from './to-do-engine/todo';

const projectLists = [];
const defaultProject = new PROJECT('Default Project', 'This is the default project');

function createProject (name, description) {
    projectLists.push(new PROJECT(name, description));
}

const createdTodo = function (title, description, dueDate, priority) {
    return (new TODO(title, description, dueDate, priority));
}

function addTodoToProject (projectName, toDoName) {
    projectName.addToDos(toDoName);
}

function removeTodoFromProject (projectName, toDoName) {
    projectName.removeToDo(toDoName);
}

function toggleComplete (toDoName) {
    let completed = toDoName.completed;
    (completed === false) ? (toDoName.completed === true) : (toDoName.completed === false);
}

