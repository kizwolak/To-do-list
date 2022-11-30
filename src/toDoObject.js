export default function toDoObject(title, type, date, priority) {
    if (type === "desc") {
        return {
            title,
            date,
            desc,
            priority,
        };
    } else {
        return {
            title,
        }
    }
};
