const datefns = require("date-fns");
import toDoObject from "./toDoObject.js";


const today = new Date();

const nextDay = datefns.addDays(today, 1);


console.log(today);
console.log(nextDay);

let test = toDoObject("Doopa", "desc");

console.log(test);
