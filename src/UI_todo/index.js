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
    const h1 = document.createElement('h1');
    const button = document.createElement('button');
    const containerDiv = createDiv();
    const headerDiv = createDiv();
    const leftSideDiv = createDiv();
    const rightSideDiv = createDiv();
    const leftSideHeading = createH2();
    const rightSideHeading = createH2();
    const rightSideDivTop = createDiv();

    h1.innerText = 'WHAT TO-DO';
    h1.classList.add(styles.blue);
    headerDiv.appendChild(h1);


    leftSideHeading.innerText = 'Projects';
    leftSideDiv.appendChild(leftSideHeading);

    rightSideHeading.innerText = 'Project One Name'
    rightSideDivTop.appendChild(rightSideHeading);
    rightSideDiv.appendChild(rightSideDivTop);



    containerDiv.appendChild(headerDiv);
    containerDiv.appendChild(leftSideDiv);
    containerDiv.appendChild(rightSideDiv);
   
    body.appendChild(containerDiv);
}