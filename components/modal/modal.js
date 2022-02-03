const btnModal = document.querySelector(".modal--btn");

const overlay = document.querySelector(".overlay");

const modalAlert = document.querySelector(".modal--alert");

btnModal.addEventListener("click", () => {
  showModal(modalAlert);
});

overlay.addEventListener("click", () => {
  closeModal();
});

const showModal = (modalContainer) => {
  modalContainer.classList.remove("hide");
  overlay.classList.remove("hide");
};

const closeModal = () => {
  modalAlert.classList.add("hide");
  overlay.classList.add("hide");
};
