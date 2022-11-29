const datefns = require("date-fns");
import createProject from "./projectCreate.js";


const testProject = createProject("test");

testProject.addNew("test1", "desc", new Date(2022, 5, 28), "high");
testProject.addNew("test2", "desc", new Date(2022, 5, 28), "high");

console.log(testProject);