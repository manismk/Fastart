const btnTopRight = document.querySelector("#topRight");
const btnBottomLeft = document.querySelector("#bottomLeft");
const btnBottomCenter = document.querySelector("#bottomCenter");

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

const showToast = (toastContainer) => {
  toastContainer.classList.toggle("hide");
  setTimeout(() => {
    if (!toastContainer.classList.contains("hide")) {
      toastContainer.classList.toggle("hide");
    }
  }, 5000);
};
