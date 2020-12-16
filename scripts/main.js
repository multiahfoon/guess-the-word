const userInput = document.getElementsByClassName('userInput')[0];
const guessResult = document.getElementsByClassName('guessResult')[0];

userInput.focus();

// an array of words to pick from as secret word
let wordlist = ['green', 'tree', 'winter', 'snow', 'spring', 'fall', 'sunday']

// random number generated and used to select a word from the word list
let randomNum = Math.floor(Math.random() * wordlist.length);
let secretWord = wordlist[randomNum];

// event listener used to check users guess
userInput.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        if(userInput.value !== secretWord ) {
            guessResult.innerText = `"${userInput.value}" was not the secret word`;
        }else {
            guessResult.innerText = `You got the secret word "${secretWord}" right!`;
        }
        userInput.value = '';
    }    
});



