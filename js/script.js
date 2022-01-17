'use strict';

let elInputNumber = document.querySelector('.guess');
let elCheckBtn = document.querySelector('.check');
let elResultNumber = document.querySelector('.number');
let elMessage = document.querySelector('.message');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elAgainBtn = document.querySelector('.again');

let score = 10;
let highscore = 0;

let randomNumber = Math.floor(Math.random() * 20 + 1);
elCheckBtn.addEventListener('click', () => {
  let inputValue = Number(elInputNumber.value);
  if (!inputValue) {
    elMessage.textContent = 'Iltimos son kiriting!!! ';
  } else if (inputValue === randomNumber) {
    elMessage.textContent = 'Topdingiz!';
    elResultNumber.textContent = randomNumber;
    document.body.style.backgroundColor = '#60b347';
    elCheckBtn.disabled = true;
    if (score > highscore) {
      highscore = score;
      elHighScore.textContent = highscore;
    }
  } else if (inputValue !== randomNumber) {
    elMessage.textContent =
      inputValue > randomNumber ? 'Bu raqam katta' : 'Bu raqam kichik';
    score--;
    elScore.textContent = score;
    if (score <= 0) {
      elCheckBtn.disabled = true;
      elMessage.textContent = 'Game over';
      document.body.style.backgroundColor = '#ff0000';
    }
  }
});

elAgainBtn.addEventListener('click', () => {
  score = 10;
  elScore.textContent = score;
  document.body.style.backgroundColor = '#222';
  randomNumber = Math.floor(Math.random() * 20 + 1);
  elResultNumber.textContent = '?';
  elInputNumber.value = null;
  elCheckBtn.disabled = false;
  elMessage.textContent = 'Loading...';
});
