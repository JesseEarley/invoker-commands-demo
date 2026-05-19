const modal = document.getElementById('Modal');
const openButton = document.getElementById('OpenModal');
const closeButton = document.getElementById('CloseModal');
openButton.addEventListener("click", () => modal.showModal());
closeButton.addEventListener("click", () => modal.close());