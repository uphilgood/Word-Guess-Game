var hangmanGame = {
    newWord: ["homer", "coffee", "phone", "television", "couch", "beer"],
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
            alert("YOU WIN! The word is " + gameWord.join("") + "!");
            resetGame();
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
            alert("YOU LOSE")
            resetGame();
        }
    }
};

var resetGame = () => {
    word = hangmanGame.newWord[Math.floor(Math.random() * hangmanGame.newWord.length)];
    hangmanGame.newWord.splice(hangmanGame.newWord.indexOf(word), 1);
    gameWord = word.toString().split("");
    hangmanGame.answerArray = [];

    for (var i = 0; i < gameWord.length; i++) {
        hangmanGame.answerArray[i] = "_";
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