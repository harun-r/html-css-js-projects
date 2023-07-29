// Variables
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// Finding the dom
const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');
const lostWonMessage = document.createElement('p')

/*
 The goal

 1.Need a Random Number
 2.Get user input number
 3.Show win and lost after compaire
 4.check the left attempt
 5.
 */

//Submit Listener
form.addEventListener('submit', function (event) {
    event.preventDefault();

    attempts++;

    if(attempts === 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts < 6) {
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts: ${
            totalAttempts - attempts
        }`;
    }
    guessingNumber.value = ''
})

function checkResult(guessingNumber) {
    let randomNumber = getRandomNumber(5)
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totalLosts++
    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    lostWonMessage.classList.add('large-text');
    cardBody.appendChild(lostWonMessage)
}

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1
}