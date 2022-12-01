const datefns = require("date-fns");
import createProject from "./createProject";
import './style.css';
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";

const addNew = document.querySelector("#addNew");

modal();

const testProject = createProject("test", "desc", new Date(1997,5,28), "chuuuj");
generateProjects(testProject);

const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener('click', formProcessor);

// Things to do - connect createProject to generateProjects, create toDoItem generation, finish CSS