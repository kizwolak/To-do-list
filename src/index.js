const datefns = require("date-fns");
import createProject from "./createProject";
import './style.css';
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";

const addNew = document.querySelector("#addNew");

modal();

const testProject = createProject("test", "desc", new Date(1997,5,28), "chuuuj");
console.log(testProject);

generateProjects(testProject);
console.log(testProject);

const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener('click', formProcessor);

// Things to do -  create toDoItem generation, finish CSS