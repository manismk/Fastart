const slider = document.querySelector(".slider");

slider.addEventListener("input", () => {
  updateSlider();
});

const updateSlider = function () {
  const backgroundPercentage =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  const backgroundColor = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${backgroundPercentage}%, var(--success-light) ${backgroundPercentage}%, var(--success-light) 100%)`;
  slider.style.background = backgroundColor;
};

updateSlider();
