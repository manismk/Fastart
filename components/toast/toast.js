const btnTopRight = document.querySelector("#topRight");
const btnBottomLeft = document.querySelector("#bottomLeft");
const btnBottomCenter = document.querySelector("#bottomCenter");

const btnCloseTopRight = document.querySelector("#closeTopRight");
const btnCloseBottomLeft = document.querySelector("#closeBottomLeft");
const btnCloseBottomCenter = document.querySelector("#closeBottomCenter");

const toastTopRight = document.querySelector(".toast--top--right");
const toastBottomLeft = document.querySelector(".toast--bottom--left");
const toastBottomCenter = document.querySelector(".toast--bottom--center");

btnTopRight.addEventListener("click", () => {
  showToast(toastTopRight);
});

btnBottomLeft.addEventListener("click", () => {
  showToast(toastBottomLeft);
});

btnBottomCenter.addEventListener("click", () => {
  showToast(toastBottomCenter);
});

btnCloseTopRight.addEventListener("click", () => {
  closeToast(toastTopRight);
});
btnCloseBottomCenter.addEventListener("click", () => {
  closeToast(toastBottomCenter);
});
btnCloseBottomLeft.addEventListener("click", () => {
  closeToast(toastBottomLeft);
});

const showToast = (toastContainer) => {
  toastContainer.classList.toggle("hide");
  setTimeout(() => {
    closeToast(toastContainer);
  }, 5000);
};

const closeToast = (toastContainer) => {
  if (!toastContainer.classList.contains("hide")) {
    toastContainer.classList.toggle("hide");
  }
};
