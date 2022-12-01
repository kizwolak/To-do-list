export default function toDoModal() {
    const addNewButton = document.querySelector('.toDoNew');
    const modal = document.querySelector("#addNewToDoModal");
    const span = document.querySelector(".close");

    addNewButton.addEventListener('click', () => modal.style.display = "block");
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
}

