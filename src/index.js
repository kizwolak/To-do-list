const datefns = require("date-fns");
import createProject from "./createProject";
import './style.css';
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";
import toDoModal from "./toDoModal";

const generalProjectArray = [];

modal();

const testProject = createProject("test");

generateProjects(testProject);

const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener('click', formProcessor);

    
const main = document.querySelector(".main");
const projectsDiv = document.querySelector('.projects');
const checkButton = document.createElement('button');
checkButton.textContent = "press here to check if everything works";
main.appendChild(checkButton);
checkButton.addEventListener('click', () => {(console.log(testProject.arrayOfToDos))
    console.log(typeof testProject.arrayOfToDos);
});


for (let i = 0; i < localStorage.length; i++) {
    const testDiv = document.createElement('div');
    testDiv.innerHTML = localStorage.getItem(localStorage.key(i))
    projectsDiv.appendChild(testDiv);
};

// Things to do - finish CSS
// Convert the date inputted to a format which JS may understand (array methods?)