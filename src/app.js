import PROJECT from './to-do-engine/project.js';
import TODO from './to-do-engine/todo.js';
import UI from './UI_todo/index.js';
import styles from './UI_todo/index.module.scss';

const ALLUI = UI();

const projectLists = [];
const defaultProject = new PROJECT('Default Project', 'This is the default project');
projectLists.push(defaultProject);
addProjectsToUI();

function addProjectsToUI () {
    ALLUI.projList.textContent = '';
    projectLists.forEach((element, index) => {
        const listItem = ALLUI.createListItem();
        listItem.id = index;
        const anchor = document.createElement("A");
        anchor.href= "#";
        anchor.textContent = element.name;
        listItem.appendChild(anchor);
        listItem.classList.add(styles.listItem);

        const removeProjBTn = document.createElement('div');
        
        ALLUI.projList.appendChild(listItem);    
    });
}

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

ALLUI.newProjectBtn.addEventListener('click', () => {
    ALLUI.projFormContainer.classList.remove(styles.hidden);
    //ALLUI.rightSideDiv.classList.remove(styles.hidden);
});

ALLUI.addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = ALLUI.inputProjName.value;
    const desc = ALLUI.inputProjDesc.value;
    
    console.log(createProject(name, desc));
    addProjectsToUI();
    ALLUI.inputProjName.value = "";
    ALLUI.inputProjDesc.value = "";


    ALLUI.projFormContainer.classList.add(styles.hidden);
});

ALLUI.leftSideDiv.addEventListener('click', (e) => {
    if (e.target.parentNode.tagName === "LI") {
        console.log(e.target);
    }
});