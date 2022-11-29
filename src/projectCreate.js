import toDoObject from "./toDoObject.js";

export default function createProject(title) {
    return {
        title,
        arrayOfToDos: [],
        addNew: (title, type, date) => {
            const toDo = toDoObject(title, type, date);
            arrayOfToDos.push(toDo);
        }
    }
};