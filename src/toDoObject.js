export default function toDoObject(title, type, date) {
    if (type === "desc") {
        return {
            title,
            date,
            desc: prompt("What is your description?"),
        };
    } else {
        return {
            title,
        }
    }
};
