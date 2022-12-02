import toDoModal from "./toDoModal";

export default function generateProjects(project) {
    let projectsDiv = document.querySelector(".projects");
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('h2');
    
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);
    
    let projectButtons = document.createElement('div');
    projectContainer.appendChild(projectButtons);

    let newButton = document.createElement('button');
    newButton.textContent = "New item";
    newButton.classList = "toDoNew";
    
    const toDoSubmitButton = document.querySelector('.newToDoSubmit');
    toDoSubmitButton.addEventListener('click', project.toDoFormProcessor);

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

    toDoModal();
}