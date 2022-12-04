import toDoModal from "./toDoModal";
import addNew from "./addNew.js";

export default function generateProjects(project) {
    const projectsDiv = document.querySelector(".projects");
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectArray = project.arrayOfToDos;
    console.log(typeof project.arrayOfToDos);
    const addNewToDoForm = document.querySelector('.addNewToDoForm')
    const testSubmit = document.createElement('button');
    testSubmit.classList = 'testSubmit';
    const modal = document.querySelector("#addNewToDoModal");
    testSubmit.textContent = 'Add new task';
    let title = document.querySelector("#title1").value;
    let description = document.querySelector("#description1").value;
    let date = document.querySelector("#date1").value;
    const main = document.querySelector('.main');


    
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);
    
    let projectButtons = document.createElement('div');
    projectContainer.appendChild(projectButtons);

    let newButton = document.createElement('button');
    newButton.textContent = "New item";

    function pushNewToDo(e) {
        e.preventDefault();
        const newItem = addNew();
        projectArray.push(newItem);
        e.target.remove();
        modal.style.display = "none";
        addNewToDoForm.reset();
    } 

    newButton.addEventListener('click', (e) => {
        const span = document.querySelector(".close");
        const alreadyAddedSubmit = document.querySelector('.testSubmit');
        modal.style.display = "block";
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
        testSubmit.addEventListener('click', pushNewToDo);
        if (addNewToDoForm.contains(alreadyAddedSubmit)) {
            alreadyAddedSubmit.remove()
            addNewToDoForm.appendChild(testSubmit);
        } else {
            addNewToDoForm.appendChild(testSubmit);
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        parent.parentNode.remove();
        project = undefined;
        console.log(project);
    });

    let editButton = document.createElement('button');
    editButton.textContent = "Edit title";
    editButton.addEventListener('click', () => {
        const newTitle = prompt("What do you want the title to be brudda?");
        project.title = newTitle;
        projectTitle.textContent = newTitle;
    });

    projectButtons.classList = "projectButtons";

    console.log('This is the result: ', projectArray);
    
    projectsDiv.addEventListener('click', (projectArray) => {
        for (const child of projectArray) {
            const toDoContainer = document.createElement('div');
            toDoContainer.classList = "toDoContainer";
            const titleDOM = document.createElement('h2');
            titleDOM.innerHTML = child.title;
            const descDOM = document.createElement('h4');
            descDOM.innerHTML = child.desc;
            const dateDOM = document.createElement('h4');
            dateDOM.innerHTML = child.date;
            const priorityDOM = document.createElement('h4');
            priorityDOM.innerHTML = child.priority;
            main.appendChild(toDoContainer);
            toDoContainer.appendChild(titleDOM);
            toDoContainer.appendChild(descDOM);
            toDoContainer.appendChild(dateDOM);
            toDoContainer.appendChild(priorityDOM);
        }});
    
    projectButtons.appendChild(newButton);
    projectButtons.appendChild(deleteButton);
    projectButtons.appendChild(editButton);
    projectContainer.appendChild(projectButtons);

}