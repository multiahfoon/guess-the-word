const userInput = document.getElementById('userInput');
const guessResult = document.getElementById('guessResult');
const hintDisplay = document.getElementById('hints');

userInput.focus();

// an array of words to pick from as secret word
let wordlist = ['green', 'tree', 'winter', 'snow', 'spring', 'fall', 'sunday']

// random number generated and used to select a word from the word list
let randomNum = Math.floor(Math.random() * wordlist.length);
let secretWord = wordlist[randomNum];

let hintArray = [];
console.log(secretWord);
for(let i = 0; i <= Math.floor(secretWord.length / 3); i++) {
    hintArray.push(secretWord[i]);
}


console.log(hintArray);

// display hint text for user
hintDisplay.innerText = `The word has ${ secretWord.length} letters and starts with "${hintArray.join('')}"`

// event listener used to check users guess
userInput.addEventListener('keyup', function(event) {
    console.log(secretWord);
    if(event.key == 'Enter') {
        if(userInput.value !== secretWord ) {
            guessResult.innerText = `"${userInput.value}" was not the secret word`;
        }else {
            guessResult.innerText = `You got the secret word "${secretWord}" right!`;
        }
        userInput.value = '';
    }    
});





/*
features:
-give user hints
-number of letters being hinted will be a 3rd of the word
    - Math.floor(0.3 * secretword.length)
*/