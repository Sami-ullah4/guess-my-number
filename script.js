// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉🎉Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 30;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🍚 No Number';
    displayMessage('🍚 No Number');
    //when guess wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('🎉🎉Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' 📈TO heigh' : ' 📉TO Low';
      displayMessage(guess > secretNumber ? ' 📈TO heigh' : ' 📉TO Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 🎇 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the guess is not equal

  //   //When the guess the greater
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📈TO heigh';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 🎇 You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When the guess is lessthen
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉TO Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 🎇 You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//the Aganin section

secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 'score';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style = '#222';
});
