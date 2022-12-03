import toDoModal from "./toDoModal";
import addNew from "./addNew.js";

export default function generateProjects(project) {
    let projectsDiv = document.querySelector(".projects");
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('h2');
    const projectArray = project.arrayOfToDos
    
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);
    
    let projectButtons = document.createElement('div');
    projectContainer.appendChild(projectButtons);

    let newButton = document.createElement('button');
    newButton.textContent = "New item";

    newButton.addEventListener('click', (e) => {
            const modal = document.querySelector("#addNewToDoModal");
            const span = document.querySelector(".close");
        
            modal.style.display = "block";
            window.addEventListener('click', (e) => {
                if (e.target == modal) {
                    modal.style.display = "none";
                }
            });
    });


    function pushNewToDo(e) {
        e.preventDefault();
        const newItem = addNew();
        projectArray.push(newItem);
    } 
    
    const toDoSubmitButton = document.querySelector('.newToDoSubmit');
    toDoSubmitButton.addEventListener('click', pushNewToDo);

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