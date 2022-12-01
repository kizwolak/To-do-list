import createProject from "./createProject";
import generateProjects from "./generateProjects";

export default function createNewItem(e) {
    const modal = document.querySelector("#addNewModal");
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector('input[name = "prio"]:checked').value;

    console.log(title + " " + description + " " + date + " " + priority);
    const newProject = createProject(title, description, date, priority);
    modal.style.display = "none";
    generateProjects(newProject);
    return newProject;
}