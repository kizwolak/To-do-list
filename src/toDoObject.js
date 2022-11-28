import toDoObjectDesc from "./toDoObjectDesc.js";

export default function toDoObject(title, type) {
    if (type === "desc") {
        return {
            title: title,
        };
    } else {
        return {
            title,
        }
    }
};
