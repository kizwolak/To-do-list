const datefns = require("date-fns");
import createProject from "./createProject";
import './style.css';
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";
import toDoModal from "./toDoModal";

const generalProjectArray = [];

modal();


const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener('click', formProcessor);

    
const main = document.querySelector(".main");
const projectsDiv = document.querySelector('.projects');
const checkButton = document.createElement('button');



for (let i = 0; i < localStorage.length; i++) {
    const testDiv = document.createElement('div');
    const testDivI = localStorage.getItem((localStorage.key(i)));
    const testJSON = JSON.parse(testDivI);
    const testJSONArray = testJSON.arrayOfToDos;
    projectsDiv.appendChild(testDiv);
    generateProjects(testJSON, testJSONArray);
};

// Things to do - finish CSS
// Convert the date inputted to a format which JS may understand (array methods?)