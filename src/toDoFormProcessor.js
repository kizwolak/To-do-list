import addNew from "./addNew";
import createProject from "./createProject";
import generateProjects from "./generateProjects";

export default function toDoFormProcessor(e) {
    e.preventDefault();
    const modal = document.querySelector("#addNewToDoModal");
    const newToDo = addNew();
    arrayOfToDos.push(newToDo);
    modal.style.display = "none";
};