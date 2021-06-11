"use strict";

const body = document.querySelector(".body");
const againBtn = document.querySelector(".againBtn");
const numberBox = document.querySelector(".numberBox");
const checkBtn = document.querySelector(".checkBtn");
let input = document.querySelector(".input").value;
const result = document.querySelector(".result");
const scoreNumber = document.querySelector(".scoreNumber");
const highScoreNumber = document.querySelector(".highScoreNumber");
let numberAnswer = createAnswer();
let score = 20;
let highScore = 0;

console.log(
  againBtn,
  numberBox,
  checkBtn,
  input,
  result,
  scoreNumber,
  highScoreNumber,
  numberAnswer,
  score
);

function createAnswer() {
  return Math.trunc(Math.random() * 20 + 1);
}

const checkNumber = (data) => {
  score--;
  if (data > numberAnswer) {
    result.innerHTML = "Too High!";
  } else if (data < numberAnswer) {
    result.innerHTML = "Too Low!";
  } else {
    body.classList.add("correct");
    result.innerHTML = "Correct!";
    numberBox.innerHTML = numberAnswer;
    if (highScore < score) {
      highScoreNumber.innerHTML = score;
    }
  }
  scoreNumber.innerHTML = score;
};

checkBtn.addEventListener("click", () => {
  input = document.querySelector(".input").value;
  console.log(input);
  checkNumber(input);
});

againBtn.addEventListener("click", () => {
  numberAnswer = createAnswer();
  body.classList.remove("correct");
  numberBox.innerHTML = "?";
  result.innerHTML = "Start Guessing...";
  score = 20;
  scoreNumber.innerHTML = score;
});
