'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const maxNumber = 20;
const minNumber = 0;
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//sdocument.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess, guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'There is no number';
    displayMessage('There is no number');
  } else if (score > minNumber + 1) {
    if (guess === secretNumber) {
      //document.querySelector('.message').textContent = 'Correct Number!!';
      displayMessage('Correct Number!!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '45rem';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (
      guess - 5 > secretNumber &&
      guess <= maxNumber &&
      guess >= minNumber
    ) {
      //document.querySelector('.message').textContent = 'Too High!!';
      displayMessage('Too High!!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
      document.querySelector('.guess').value = '';
    } else if (
      guess > secretNumber &&
      guess <= maxNumber &&
      guess >= minNumber
    ) {
      //document.querySelector('.message').textContent ='You Are Close But Still High!!';
      displayMessage('You Are Close But Still High!!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
      document.querySelector('.guess').value = '';
    } else if (
      guess + 5 < secretNumber &&
      guess <= maxNumber &&
      guess >= minNumber
    ) {
      //document.querySelector('.message').textContent = 'Too Low!!';
      displayMessage('Too Low!!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
      document.querySelector('.guess').value = '';
    } else if (
      guess < secretNumber &&
      guess <= maxNumber &&
      guess >= minNumber
    ) {
      //document.querySelector('.message').textContent ='You Are Close But Still Low!!';
      displayMessage('You Are Close But Still Low!!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
      document.querySelector('.guess').value = '';
    } else if (guess > maxNumber || guess < minNumber) {
      //document.querySelector('.message').textContent ='Please enter between 0 - 20 ';
      displayMessage('Please enter between 0 - 20 ');
      document.querySelector('.guess').value = '';
    }
  } else {
    //document.querySelector('.score').textContent = minNumber;
    displayScore(minNumber);
    //document.querySelector('.message').textContent = 'You Lost The Game!!';
    displayMessage('You Lost the Game!!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
