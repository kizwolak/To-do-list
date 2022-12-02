const datefns = require("date-fns");
import createProject from "./createProject";
import './style.css';
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";
import addNew from "./addNew.js";
import toDoFormProcessor from "./toDoFormProcessor.js"


modal();

const testProject = createProject("test", "desc", new Date(1997,5,28), "chuuuj");

generateProjects(testProject);

const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener('click', formProcessor);

const toDoSubmitButton = document.querySelector(".newToDoSubmit");
toDoSubmitButton.addEventListener('click', toDoFormProcessor);

const main = document.querySelector(".main");
const checkButton = document.createElement('button');
checkButton.textContent = "press here to check if everything works";
main.appendChild(checkButton);
checkButton.addEventListener('click', () => (console.log(testProject.arrayOfToDos)));

// Things to do -  create toDoItem generation, finish CSS