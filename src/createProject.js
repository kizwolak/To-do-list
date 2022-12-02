import generateProjects from "./generateProjects.js";
import addNew from "./addNew.js";

export default function createProject(title) {
    return {
        title,
        arrayOfToDos: [],
        addNew,
    }
};