const datefns = require("date-fns");
import format from 'date-fns/format'


export default function toDoObject(title, desc, date, priority) {
    console.log(typeof date)

    return {
    title,
    desc,
    date,
    priority,
    }
};
