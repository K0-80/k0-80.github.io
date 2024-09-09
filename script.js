// Add event listener to paint container
document.addEventListener("DOMContentLoaded", () => {
    const paintContainer = document.querySelector(".paint-container");
    paintContainer.addEventListener("animationend", () => {
      paintContainer.classList.add("hidden");
    });
  });