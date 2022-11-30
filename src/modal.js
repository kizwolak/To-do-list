export default function modal() {
    const modal = document.querySelector("#addNewModal");
    const addNew = document.querySelector("#addNew");
    const span = document.querySelector(".close");

    addNew.addEventListener('click', () => modal.style.display = "block");
    span.addEventListener('click', () => modal.style.display = "none");
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
}