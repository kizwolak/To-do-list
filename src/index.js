const datefns = require("date-fns");
import createProject from "./projectCreate.js";
import './style.css';
import generateProjects from "./generateProjects.js";



const testProject = createProject("test", "desc", new Date(1997,5,28), "chuuuj");
generateProjects(testProject);

console.log(testProject);


