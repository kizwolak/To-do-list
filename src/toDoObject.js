export default function toDoObject(title, desc, date, priority) {

    const main = document.querySelector(".main");
    const titleDOM = document.createElement("p");
    titleDOM.innerHTML = title;
    main.appendChild(titleDOM);

    return {
    title,
    date,
    desc,
    priority,
    }
};
