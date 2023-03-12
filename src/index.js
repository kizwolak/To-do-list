import "./style.css";
import generateProjects from "./generateProjects.js";
import modal from "./modal.js";
import formProcessor from "./formProcessor.js";

modal();

const submitButton = document.querySelector("#newFormSubmit");
submitButton.addEventListener("click", formProcessor);

const projectsDiv = document.querySelector(".projects");

for (let i = 0; i < localStorage.length; i++) {
  const testDiv = document.createElement("div");
  const testDivI = localStorage.getItem(localStorage.key(i));
  const testJSON = JSON.parse(testDivI);
  const testJSONArray = testJSON.arrayOfToDos;
  projectsDiv.appendChild(testDiv);
  generateProjects(testJSON, testJSONArray);
}

// Bug - adding new item to other object when another is displayed also displays that object
