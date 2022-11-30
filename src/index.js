const datefns = require("date-fns");
import createProject from "./projectCreate.js";
import timeSorter from "./timeSorter.js";


const testProject = createProject("test");


testProject.addNew("test1", "desc", new Date(2022, 4, 30), "high");
testProject.addNew("test2", "desc", new Date(2022, 5, 28), "high");
testProject.addNew("test3", "desc", new Date(2022, 5, 28), "high");



timeSorter(testProject);

