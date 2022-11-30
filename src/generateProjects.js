export default function generateProjects(project) {
    let projectsDiv = document.querySelector(".projects");
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('h2');
    
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);
    
    let projectButtons = document.createElement('div');
    projectContainer.appendChild(projectButtons);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    let editButton = document.createElement('button');
    editButton.textContent = "Edit";

    projectButtons.appendChild(deleteButton);
    projectButtons.appendChild(editButton);
    projectContainer.appendChild(projectButtons);


}