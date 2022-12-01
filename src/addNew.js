import createProject from "./createProject";
import toDoObject from "./toDoObject.js";


export default function addNew() {
    let title = this.title;
    let toDo = toDoObject(title);
    this.arrayOfToDos.push(toDo);
    return this;
}