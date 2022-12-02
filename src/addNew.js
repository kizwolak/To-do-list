import toDoObject from "./toDoObject.js";


export default function addNew(object) {
    const title = document.querySelector("#title1").value;
    const description = document.querySelector("#description1").value;
    const date = document.querySelector("#date1").value;
    const priority = document.querySelector('input[name = "prio1"]:checked').value;

    let toDo = toDoObject(title, description, date, priority);
    return toDo;
}