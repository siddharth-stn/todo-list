import PROJECT from './to-do-engine/project.js';
import TODO from './to-do-engine/todo.js';
import UI from './UI_todo/index.js';
import styles from './UI_todo/index.module.scss';
import { compareAsc, format } from 'date-fns';

const ALLUI = UI();
let currentProj;
const projectLists = [];
let sampleProj = new PROJECT();
let localProjList;
function getProjListFromLocalStorage () {
    localProjList = JSON.parse(localStorage.getItem("projList"));
}

getProjListFromLocalStorage();
if ( localProjList ) {
    projectLists.push(...localProjList);
    projectLists.forEach(element => {
        Object.setPrototypeOf(element, sampleProj.constructor.prototype);
    });
}


const defaultProject = new PROJECT('Default Project', 'This is the default project');
projectLists[0] = defaultProject;
let today = format(new Date(), 'dd-MM-yyyy');
let defaultTodo = new TODO("Default to-do", "this is the default todo", today, "low");
projectLists[0].addToDos(defaultTodo);

function setLocalStorage () {
    localStorage.setItem("projList", JSON.stringify(projectLists));
}


function createProject(name, description) {
    projectLists.push(new PROJECT(name, description));
    setLocalStorage();
}

function addProjectsToUI() {
    ALLUI.projList.textContent = "";
    projectLists.forEach((element, index) => {
        const listItem = ALLUI.createListItem();
        listItem.id = index;
        const anchor = document.createElement("A");
        anchor.href = "#";
        anchor.textContent = element.name;
        listItem.appendChild(anchor);
        listItem.classList.add(styles.listItem);

        const removeProjBtn = document.createElement('div');
        removeProjBtn.classList.add(styles.removeProjBtn);
        listItem.appendChild(removeProjBtn);
        ALLUI.projList.appendChild(listItem);

        removeProjBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteProj(index);
        }, true);

    });
    setLocalStorage();
}


addProjectsToUI();


function deleteProj (index) {
    const projName = projectLists[index].name;
    projectLists.splice(index, 1);
    if (projName == ALLUI.rightSideHeading.textContent) {
        ALLUI.rightSideDiv.classList.add(styles.hidden);
    }
    addProjectsToUI();
}




ALLUI.newProjectBtn.addEventListener('click', () => {
    ALLUI.projFormContainer.classList.remove(styles.hidden);
    //ALLUI.rightSideDiv.classList.remove(styles.hidden);
});

ALLUI.addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = ALLUI.inputProjName.value;
    const desc = ALLUI.inputProjDesc.value;

    createProject(name, desc);
    addProjectsToUI();
    ALLUI.inputProjName.value = "";
    ALLUI.inputProjDesc.value = "";


    ALLUI.projFormContainer.classList.add(styles.hidden);
});


ALLUI.leftSideDiv.addEventListener('click', (e) => {
    if (e.target.parentNode.tagName === "LI") {
        let clickedElem = e.target.parentNode;
        let elemId = Number(clickedElem.id);
        ALLUI.rightSideHeading.textContent = projectLists[elemId].name;
        ALLUI.rightSideDiv.classList.remove(styles.hidden);

        stackTodos(elemId);
        currentProj = elemId;
        console.log(projectLists[currentProj].todo_list);
        //ALLUI.rightSideDiv.classList.remove(styles.hidden);
    }
});

ALLUI.newTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskName = ALLUI.enterTask.value;
    const taskDesc = ALLUI.enterTaskDescription.value;
    const taskDueDate = format(new Date(ALLUI.enterDate.value), 'dd-MM-yyyy');
    const highPriority = ALLUI.highRadio.checked;
    let priority;

    if (highPriority) {
        priority = 'high';
    } else {
        priority = 'low';
    }

    const todo = new TODO(taskName, taskDesc, taskDueDate, priority);
    projectLists[currentProj].addToDos(todo);

    stackTodos(currentProj);
    setLocalStorage();
});

function stackTodos(projId) {
    const taskContainer = ALLUI.taskContainer;
    taskContainer.textContent = "";
    projectLists[projId].todo_list.forEach((element, index) => {
        const taskDiv = document.createElement('div');
        if (element.completed == false || element._completed == false) {
            taskDiv.classList.add(styles.incompleteTask); 
        } else {
            taskDiv.classList.add(styles.completeTask);
        }
        taskDiv.classList.add(styles.taskDiv);
        const taskName = document.createElement('span');
        taskName.classList.add(styles.taskName);
        taskName.textContent = `${index+1}. ${element.title}`;

        const priorityDiv = document.createElement('div');
        priorityDiv.style.backgroundColor = "white";
        priorityDiv.style.marginLeft = "50px";
        if (element.priority === 1) {
            priorityDiv.textContent = "High Priority";
            priorityDiv.style.color = "red";
        } else {
            priorityDiv.textContent = "Low Priority";
            priorityDiv.style.color = "#FFD700";
        }

        const showDateDiv = document.createElement('div');
        showDateDiv.classList.add(styles.showDateDiv);
        showDateDiv.textContent = element.dueDate;

        const markCompleteDiv = document.createElement('div');
        markCompleteDiv.classList.add(styles.markCompleteDiv);

        const deleteTaskDiv = document.createElement('div');
        deleteTaskDiv.classList.add(styles.deleteTaskDiv);

        taskDiv.appendChild(taskName);
        taskDiv.appendChild(priorityDiv);
        taskDiv.appendChild(showDateDiv);
        taskDiv.appendChild(markCompleteDiv);
        taskDiv.appendChild(deleteTaskDiv);

        taskContainer.appendChild(taskDiv);

        markCompleteDiv.addEventListener('click', () => {
            markTaskComplete(element, taskDiv), true
        });

        deleteTaskDiv.addEventListener('click', () => {
            deleteTask(index, projId);
        }, true);
    });
}

function markTaskComplete(element, taskDiv) {
    element._completed = true;
    taskDiv.classList.remove(styles.incompleteTask);
    taskDiv.classList.add(styles.completeTask);
    setLocalStorage();
}

function deleteTask(index, projId) {
    projectLists[currentProj].todo_list.splice(index, 1);
    stackTodos(projId);
    setLocalStorage();
}