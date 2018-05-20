var hangmanGame = {
    word: ["c", "o", "f", "f", "e", "e"],
    answerArray: [],
    remainingLetters: 0,
    guessesAvailable: 10,
    correctGuesses: function () {

        for (var j = 0; j < this.word.length; j++) {
            if (this.word[j] === guess) {
                this.answerArray[j] = guess;
                this.remainingLetters--;
            }
        }
        // console.log(this.answerArray)
        if (this.remainingLetters === 0) {
            alert("YOU WIN");
        }
    },
    incorrectGuesses: function () {
        this.guessesAvailable -= 1;
        if (this.guessesAvailable === 0) {
            alert("YOU LOSE")
        }
        // console.log(this.guessesAvailable);
    }

}

for (var i = 0; i < hangmanGame.word.length; i++) {
    hangmanGame.answerArray[i] = "_";
}

hangmanGame.remainingLetters = hangmanGame.answerArray.length,

    document.onkeyup = function (event) {
        var userGuess = event.key;
        guess = userGuess;


        if (hangmanGame.word.includes(guess)) {
            hangmanGame.correctGuesses();
            document.getElementById("letters").innerHTML = "THE WORD IS: " + hangmanGame.answerArray;
        } else {
            hangmanGame.incorrectGuesses();
            document.getElementById("lives").innerHTML = "LIVES REMAINING: " + hangmanGame.guessesAvailable;
        }


    };