// Open/close modal
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal-btn");

// Queries
const startGameBtn = document.querySelector(".start-btn");
const endGameBtn = document.querySelector(".end-btn");
const circles = document.querySelectorAll(".circle");
const scoreText = document.querySelector(".score");
const resultText = document.querySelector(".result");
const message = document.querySelector(".message");

// Variables
let active = 0;
let pace = 1000;
let score = 0;
let timer;
let rounds = 0;

// Definds Function
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => clickedCircles(index));
});

const clickedCircles = (index) => {
  if (index !== active) {
    endGame();
  } else {
    score++;
    rounds--;
    scoreText.textContent = `Your score: ${score}`;
  }
};

// Start Game function
const startGame = () => {
  //Show and hide start and stop game button
  startGameBtn.style.display = "none";
  endGameBtn.style.display = "block";
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.pointerEvents = "auto";
  }

  // Generate Random Number
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 4);
  };

  const pickNewActive = () => {
    let nextActive = getRandomNumber();
    return nextActive != active ? nextActive : getRandomNumber();
  };
  nextActive = pickNewActive();

  circles[nextActive].classList.add("active");
  circles[active].classList.remove("active");
  active = nextActive;
  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  if (rounds >= 1) {
    endGame();
  }
};

// End game function
const endGame = () => {
  clearTimeout(timer);
  modal.style.visibility = "visible";
  resultText.textContent = `Your final score was ${score}`;
  if (score > 0 && score <= 2) {
    message.textContent = `very bad score`;
  } else if (score > 2 && score < 4) {
    message.textContent = "Ok score";
  } else {
    message.textContent = "good score";
  }
};

// Reload game function
const reloadGame = () => {
  window.location.reload();
};

startGameBtn.addEventListener("click", startGame);
endGameBtn.addEventListener("click", endGame);
closeModalButton.addEventListener("click", reloadGame);
