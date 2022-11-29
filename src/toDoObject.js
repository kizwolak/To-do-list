export default function toDoObject(title, type, date, priority) {
    if (type === "desc") {
        return {
            title,
            date,
            desc: prompt("What is your description?"),
            priority,
        };
    } else {
        return {
            title,
        }
    }
};
