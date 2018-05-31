var hangmanGame = {
    newWord: ["javascript", "angular", "node", "react", "vue", "jquery", "html", "css"],
    answerArray: [],
    remainingLetters: 0,
    guessesAvailable: 10,
    incorrectLetters: [],
    correctLetters: [],
    correctGuesses: function () {
        if (this.correctLetters.includes(guess)) {
            alert("You already guessed this letter");
        } else {

            for (var j = 0; j < gameWord.length; j++) {
                if (gameWord[j] === guess) {
                    this.answerArray[j] = guess;
                    this.remainingLetters--;
                }
            }
            this.correctLetters.push(guess);
        }
        if (this.remainingLetters === 0) {
            x.style.display = "block"
        }
    },
    incorrectGuesses: function () {
        if (this.incorrectLetters.includes(guess)) {
            alert("You already guessed this letter");
        } else {
            this.incorrectLetters.push(guess);
            this.guessesAvailable -= 1;
        }
        if (this.guessesAvailable === 0) {
            y.style.display = "block"
            document.getElementById("show-word").innerHTML = "The word was " + gameWord.join("").toUpperCase() + " but don't give up!"
        }
    }
};

var resetGame = () => {
    x = document.getElementById("win-message")
    x.style.display = "none"
    y = document.getElementById("loss-message")
    y.style.display = "none"
    word = hangmanGame.newWord[Math.floor(Math.random() * hangmanGame.newWord.length)];
    hangmanGame.newWord.splice(hangmanGame.newWord.indexOf(word), 1);
    gameWord = word.toString().split("");
    hangmanGame.answerArray = [];

    for (var i = 0; i < gameWord.length; i++) {
        hangmanGame.answerArray[i] = " _ ";
    }

    console.log(gameWord);
    hangmanGame.remainingLetters = hangmanGame.answerArray.length;
    hangmanGame.guessesAvailable = 10;
    hangmanGame.incorrectLetters = [];
    hangmanGame.correctLetters = [];
    document.getElementById("guessed-letters").innerHTML = "INCORRECT LETTERS " + hangmanGame.incorrectLetters;
    document.getElementById("lives").innerHTML = "LIVES REMAINING: " + hangmanGame.guessesAvailable;
    document.getElementById("letters").innerHTML = "THE WORD IS: " + hangmanGame.answerArray;
};

resetGame();

document.onkeyup = function (event) {
    var userGuess = event.key;
    guess = userGuess;

    if (gameWord.includes(guess)) {
        hangmanGame.correctGuesses();
        document.getElementById("letters").innerHTML = "THE WORD IS: " + hangmanGame.answerArray;
    } else {
        hangmanGame.incorrectGuesses();
        document.getElementById("guessed-letters").innerHTML = "INCORRECT LETTERS " + hangmanGame.incorrectLetters;
        document.getElementById("lives").innerHTML = "LIVES REMAINING: " + hangmanGame.guessesAvailable;
    }
};