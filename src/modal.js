export default function modal() {
  const modal = document.querySelector("#addNewModal");
  const addNew = document.querySelector("#addNew");

  addNew.addEventListener("click", () => (modal.style.display = "block"));
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}
