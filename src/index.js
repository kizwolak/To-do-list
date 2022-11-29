const datefns = require("date-fns");
import toDoObject from "./toDoObject.js";
import createProject from "./projectCreate.js";


const today = new Date();

const nextDay = datefns.addDays(today, 1);

const time = new Date(2022, 5, 28, 12, 13, 17);
const time2 = new Date(2022,5,29,1,3,4);


console.log(time);
console.log(time2);

const testProject = createProject("test");

testProject.addNew("test1", "desc", new Date(2022, 5, 28));
testProject.addNew("test2", "desc", new Date(2022, 5, 28));

console.log(testProject);