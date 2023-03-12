const datefns = require("date-fns");

export default function toDoObject(title, desc, date, priority) {
  console.log(typeof date);

  return {
    title,
    desc,
    date,
    priority,
  };
}
