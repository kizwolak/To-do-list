import toDoObject from "./toDoObject.js";
import generateProjects from "./generateProjects.js";

export default function createProject(title) {
    return {
        title,
        arrayOfToDos: [],
        addNew (title, type, date, priority) {
            let toDo = toDoObject(title, type, date, priority);
            this.arrayOfToDos.push(toDo);
            console.log(`This is ${this.arrayOfToDos}`);
            return this;
        },
        generateProjects,
        
    }
};