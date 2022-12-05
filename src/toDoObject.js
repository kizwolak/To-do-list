export default function toDoObject(title, desc, date, priority) {
    date = new Date(date);
    return {
    title,
    desc,
    date,
    priority,
    }
};
