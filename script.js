/*
Tell user game has started when they click game start
Solve edge case where someone plays game without starting
What if someone puts a letter
Textbox should clear old value after submits
Solve game should end after user wins
Fix all the bugs
*/
// A GUESS GAME : collects a users guess;
// generate a random number b/wa spec. limit
// compares users guess with the random number
// all of this within 6 trials
// // if the user guesses correctly, the game ends
//if user guesses wrong , it should say if very bhigh or very low
// if usrr guesses wrong after 6 trials, game ends

//BONUS: There should be a try again
//There should also be a UI

const MAX_TRIES = 6;

let RANDOM_GUESS = 0;
let user_trial = 1;
let gameStarted = false;
let gameOver = false;

function startButton() {
    const randomNumber = Math.round(Math.random() * 100);
    RANDOM_GUESS = randomNumber;
    console.log(`Random number: ${RANDOM_GUESS}`);
    gameStarted = true;
    gameOver = false;

    document.querySelector('.message').innerText = 'Game started!!!. Make your guess';
    document.querySelector('.user-guess').value = '';
    document.querySelector('.input-section').classList.remove('hidden');
    document.querySelector('.extra-options').classList.add('hidden');
    document.body.style.backgroundImage = ''; 
}

function takeUserGuess(){
    if(!gameStarted || gameOver){
        return;
    }

    let userGuess = parseInt(document.querySelector('.user-guess').value);
    const message = document.querySelector('.message');


    console.log(`user guess: ${userGuess}`);
    console.log(`User trial: ${user_trial}`);

    if (userGuess == RANDOM_GUESS) {
        message.innerHTML = "🎉🎉CONGRATULATIONS,  You WIN!! 🎉 \nGame has ended";
        gameOver = true;
        return;
    } else if (userGuess < RANDOM_GUESS) {
        message.innerHTML = "TOO LOW, Please Try Again";
    } else {
        message.innerHTML = "TOO HIGH, Please Try Again";
    }
    
    user_trial++;

    if (user_trial > MAX_TRIES){
        showExtraOptions();
        document.querySelector('.message').innerHTML = `Sorry, you lost. The answer was ${RANDOM_GUESS}`;
    }

    document.querySelector('.user-guess').value = '';
}

function showExtraOptions(){
    gameOver = true;
    document.querySelector('.extra-options').classList.remove('hidden');
}

function quitGame(){
    gameOver = true;
    document.querySelector('.input-section').classList.remove('hidden');
    document.querySelector('.extra-options').classList.add('hidden');
}

function restartGame(){
    startButton();
    user_trial = 1;
}
