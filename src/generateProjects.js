export default function generateProjects(project) {
    let projectsDiv = document.querySelector(".projects");
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);  
}