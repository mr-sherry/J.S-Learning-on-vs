let randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);
let userInput = document.querySelector("#guessField")
let submit = document.querySelector("#subt")
let guesses = document.querySelector(".guesses");
let reamiangGuess = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let result = document.querySelector(".resultParas");

let p = document.createElement('p');

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("The guess number is not valid")
    } else if (guess < 1) {
        alert("The guess number should be greater then than 1")
    } else if (guess > 100) {
        alert("The guess number should be less then 100")
    } else {
        prevGuess.push(guess);
        if (newGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number is ${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage("You guesses it right");
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("Your guess is Too low")
    }
    else if (guess > randomNumber) {
        displayMessage("Your guess is TOO high")
    }
}

function displayGuess(guess) {
    userInput.value = '';
    console.log(guess);
    guesses.innerHTML += `${guess},`;
    newGuess++;
    reamiangGuess.innerHTML = `${11 - newGuess}`

}


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    let btn = document.querySelector('#newGameBtn');
    btn.addEventListener('click', function () {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        newGuess = 1;
        reamiangGuess.innerHTML = `${11 - newGuess}`
        lowOrHi.innerHTML = ''
        p.innerHTML = ""
        guesses.innerHTML = ""
        prevGuess = [];
        submit.removeAttribute("disabled")
        userInput.removeAttribute("disabled");
        playGame = true;

    })


}
function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled","")
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGameBtn">New Game</h2>`;
    result.appendChild(p);
    playGame = false;
    newGame();


}


// var d = new Date();
// var time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
// console.log(time);
// Result: "02:28:06 PM"