let randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);
let userInput = document.querySelector("#guessField")
let submit = document.querySelector("#subt")
let guesses = document.querySelector(".guesses");
let reamiangGuess = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let p = document.createElement('p');

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let number = parseInt(userInput.value);
        console.log(number);

    })
}

function validateGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}
function checkGuess(guess) {
    //
}

function displayMessage(message) {
    //
}

function newGame() {
    //
}
function endGame() {
    //
}
