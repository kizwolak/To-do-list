import createProject from "./createProject";
import generateProjects from "./generateProjects";

export default function createNewProject(e) {
  const modal = document.querySelector("#addNewModal");
  e.preventDefault();
  const title = document.querySelector("#title").value;
  // const description = document.querySelector("#description").value;
  // const date = document.querySelector("#date").value;
  // const priority = document.querySelector('input[name = "prio"]:checked').value;

  // console.log(title + " " + description + " " + date + " " + priority);
  const newProject = createProject(title);
  modal.style.display = "none";
  const newProjectArray = newProject.arrayOfToDos;
  localStorage.setItem(`${title}`, JSON.stringify(newProject));
  return generateProjects(newProject, newProjectArray);
}
