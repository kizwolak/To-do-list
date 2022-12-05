const datefns = require("date-fns");
import format from 'date-fns/format'

export default function toDoObject(title, desc, date, priority) {
    date = format(new Date(date), 'dd MMM yyyy');

    return {
    title,
    desc,
    date,
    priority,
    }
};
