// Open/close modal
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

const closeModal = () => {
  modal.style.visibility = "hidden";
};

closeModalBtn.addEventListener("click", closeModal);

// Variables
const startGameBtn = document.querySelector(".start-btn");
const stopGameBtn = document.querySelector(".stop-btn");
console.log(startGameBtn, stopGameBtn);
//Show background color for divs
const circles = document.querySelectorAll(".circle");
console.log(circles);

circles.forEach((circle) =>
  circle.addEventListener("click", (event) => {
    console.log(event.currentTarget);
  })
);
