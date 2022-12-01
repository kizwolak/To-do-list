import addNew from "./addNew";

export default function createNewProject(e) {
    const modal = document.querySelector("#addNewToDoModal");
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector('input[name = "prio"]:checked').value;

    // console.log(title + " " + description + " " + date + " " + priority);
    const newProject = addNew(title);
    modal.style.display = "none";

}