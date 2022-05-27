import PROJECT from './to-do-engine/project.js';
import TODO from './to-do-engine/todo.js';
import UI from './UI_todo/index.js';
import styles from './UI_todo/index.module.scss';

const ALLUI = UI();

const projectLists = [];
const defaultProject = new PROJECT('Default Project', 'This is the default project');
projectLists.push(defaultProject);

function createProject (name, description) {
    projectLists.push(new PROJECT(name, description));
}

function createTodo(title, description, dueDate, priority) {
    return (new TODO(title, description, dueDate, priority));
}

function addTodoToProject (projectIndex, toDo) {
    let element = projectLists[projectIndex];
    element.addToDos(toDo);
}

function removeTodoFromProject (projectIndex, toDoIndex) {
    let projectElement = projectLists[projectIndex];
    projectElement.removeToDo(toDoIndex);
}

function toggleComplete (toDoName) {
    let completed = toDoName.completed;
    (completed === false) ? (toDoName.completed = true) : (toDoName.completed = false);
}

ALLUI.rightSideDiv.classList.add(styles.hidden);

ALLUI.newProjectBtn.addEventListener('click', () => {
    ALLUI.rightSideDiv.classList.remove(styles.hidden);
});