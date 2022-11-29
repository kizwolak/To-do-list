import toDoObject from "./toDoObject.js";

export default function createProject(title) {
    return {
        title,
        arrayOfToDos: [],
        addNew (title, type, date) {
            let toDo = toDoObject(title, type, date);
            let newArray = [];
            newArray.push(toDo);
            this.arrayOfToDos = newArray;
            return this;
        }
    }
};