import toDoModal from "./toDoModal";
import addNew from "./addNew.js";

export default function generateProjects(project) {
    const projectsDiv = document.querySelector(".projects");
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectArray = project.arrayOfToDos;
    const addNewToDoForm = document.querySelector('.addNewToDoForm')
    const testSubmit = document.createElement('button');
    testSubmit.textContent = 'Add new task';

    
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
    } 

    newButton.addEventListener('click', (e) => {
        const modal = document.querySelector("#addNewToDoModal");
        const span = document.querySelector(".close");
    
        modal.style.display = "block";
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
        testSubmit.addEventListener('click', pushNewToDo);
        addNewToDoForm.appendChild(testSubmit);
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
    
    projectButtons.appendChild(newButton);
    projectButtons.appendChild(deleteButton);
    projectButtons.appendChild(editButton);
    projectContainer.appendChild(projectButtons);

}