import createProject from "./createProject";


export default function createNewItem(e) {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector('input[name = "prio"]:checked').value;

    console.log(title + " " + description + " " + date + " " + priority);
    console.log(createProject(title, description, date, priority));
    return createProject(title, description, date, priority)
}