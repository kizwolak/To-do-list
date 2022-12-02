import generateProjects from "./generateProjects.js";
import addNew from "./addNew.js";
import toDoFormProcessor from "./toDoFormProcessor.js";

export default function createProject(title) {
    return {
        title,
        arrayOfToDos: [],
        addNew,
        toDoFormProcessor,
    }
};