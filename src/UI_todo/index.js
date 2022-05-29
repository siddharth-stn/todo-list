import styles from  './index.module.scss';

export default function () {
    function createDiv () {
        return document.createElement('div');
    } 

    function createH2 () {
        return document.createElement('h2');
    }

    function createPara () {
        return document.createElement('p');
    }

    function createInput () {
        return document.createElement('input');
    }

    function createListItem () {
        return document.createElement('li');
    }

    function createUL () {
        return document.createElement('ul');
    }



    const body = document.querySelector('body');


    // project form 
    const projFormContainer = createDiv();
    projFormContainer.classList.add(styles.projFormContainer, styles.hidden);
    const projForm = document.createElement('form');
    projForm.classList.add(styles.projForm);
    const newProjHead = createH2();
    newProjHead.textContent = "ADD NEW PROJECT";
    const inputProjName = createInput();
    inputProjName.placeholder = "Enter Project Name...";
    const inputProjDesc = createInput();
    inputProjDesc.placeholder = "Enter Project Description...";
    const addButton = document.createElement("button");
    addButton.textContent = "Add"
    addButton.classList.add(styles.addButton);

    projForm.appendChild(newProjHead);
    projForm.appendChild(inputProjName);
    projForm.appendChild(inputProjDesc);
    projForm.appendChild(addButton);

    projFormContainer.appendChild(projForm);
    body.appendChild(projFormContainer)
    
    // Container
    const containerDiv = createDiv();
    containerDiv.classList.add(styles.containerDiv);

    // Header 
    const h1 = document.createElement('h1');
    const headerDiv = createDiv();
    h1.innerText = 'WHAT TO-DO';
    headerDiv.classList.add(styles.headerDiv);
    headerDiv.appendChild(h1);
    

    // Main Content
    const mainDiv = createDiv();
    mainDiv.classList.add(styles.mainDiv);

        // Left Side Div
        const leftSideDiv = createDiv();
        const newProjectBtn = document.createElement("button");
        newProjectBtn.textContent = "Add New Project";
        newProjectBtn.classList.add(styles.newProjectBtn);
        const leftSideHeading = createH2();
        leftSideHeading.innerText = 'Projects';
        leftSideHeading.classList.add(styles.leftSideHeading);
        const projList = createDiv();
        projList.classList.add(styles.projList);
        leftSideDiv.classList.add(styles.leftSideDiv);
        leftSideDiv.appendChild(leftSideHeading);
        leftSideDiv.appendChild(projList);
        leftSideDiv.appendChild(newProjectBtn);

        // Right Side Div
        const rightSideDiv = createDiv();
        const rightSideHeading = createH2();
        rightSideHeading.innerText = 'Project One Name';
        rightSideHeading.classList.add(styles.rightSideHeading);
        rightSideDiv.classList.add(styles.rightSideDiv, styles.hidden);
        rightSideDiv.appendChild(rightSideHeading);

            // Right container div
            const rightContainer = createDiv();
            rightContainer.classList.add(styles.rightContainer);

                // Task Container
                const taskContainer = createDiv();
                taskContainer.classList.add(styles.taskContainer);

                // Form Container
                const form = document.createElement('form');

                    // Input Container
                    const inputContainer = createDiv();
                    inputContainer.classList.add(styles.inputContainer);
                    const enterTask = createInput();
                    enterTask.placeholder = "write your new task here...";
                    enterTask.classList.add(styles.inputBox);
                    const enterDate = createInput();
                    enterDate.type = "date";
                    enterDate.placeholder = "enter due date...";
                    enterDate.classList.add(styles.inputBox);
                    const enterTaskDescription = createInput();
                    enterTaskDescription.placeholder = "write task description...";
                    enterTaskDescription.classList.add(styles.inputBox);
                        

                    // Radio Container
                    const radioContainer = createDiv();
                    radioContainer.classList.add(styles.radioContainer);
                    const highLabel = document.createElement('label');
                    highLabel.textContent = "High Priority";
                    highLabel.style.color = "red";
                    const lowLabel = document.createElement('label');
                    lowLabel.textContent = "Low Priority";
                    lowLabel.style.color = "#FDE16C";
                    const highRadioDiv = createDiv();
                    highRadioDiv.classList.add(styles.highRadioDiv);
                    const lowRadioDiv = createDiv();
                    lowRadioDiv.classList.add(styles.lowRadioDiv);
                    const highRadio = createInput();
                    highRadio.type = "radio";
                    highRadio.name = "priority";
                    const lowRadio = createInput();
                    lowRadio.type = "radio";
                    lowRadio.name = "priority"

                    
                    // Button
                    const newTaskBtn = document.createElement('button');
                    newTaskBtn.classList.add(styles.newTaskBtn);
                    newTaskBtn.textContent = "Add New Task";
                    
            // Append Elements to right container div and its children-------->
                    // Append child to input container
                    inputContainer.appendChild(enterTask);
                    inputContainer.appendChild(enterDate);
                    inputContainer.appendChild(enterTaskDescription);

                    // Append Child to radio container div
                        // Append child to high radio div
                        highRadioDiv.appendChild(highLabel);
                        highRadioDiv.appendChild(highRadio);
                        
                        // Append child to low radio div    
                        lowRadioDiv.appendChild(lowLabel);
                        lowRadioDiv.appendChild(lowRadio);
                                
                    radioContainer.appendChild(highRadioDiv);
                    radioContainer.appendChild(lowRadioDiv);
                
                // Append child to form             
                form.appendChild(inputContainer);
                form.appendChild(radioContainer);
                form.appendChild(newTaskBtn);

            // Append Child to right container div    
            rightContainer.appendChild(taskContainer);
            rightContainer.appendChild(form);

        // Append child to right side div
        rightSideDiv.appendChild(rightContainer);

    // Append child to Main Content Div
    mainDiv.appendChild(leftSideDiv);
    mainDiv.appendChild(rightSideDiv);

// Append child to container div
containerDiv.appendChild(headerDiv);
containerDiv.appendChild(mainDiv);


// Append child to body
body.appendChild(containerDiv);

return {
    body,
    containerDiv,
    headerDiv,
    mainDiv,
    leftSideDiv,
    leftSideHeading,
    projList,
    rightContainer,
    rightSideDiv,
    rightSideHeading,
    taskContainer,
    form,
    inputContainer,
    enterTask,
    enterDate,
    enterTaskDescription,
    highRadio,
    lowRadio,
    newTaskBtn,
    newProjectBtn,
    projFormContainer,
    projForm,
    addButton,
    inputProjDesc,
    inputProjName,
    createUL,
    createListItem,   
}

}