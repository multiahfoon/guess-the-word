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
let currentUserTry = 1;

// look for another listener because this fires for every button pressed might not be a good thing
userInput.addEventListener('keyup', function(event) {
    console.log(currentUserTry);
    
    
    if(event.key == 'Enter') {
        if(userInput.value !== secretWord) {
            guessResult.innerText = `"${userInput.value}" was not the secret word`;
        }else if(userInput.value == secretWord){
            guessResult.innerText = `You got the secret word "${secretWord}" right!`;
        }
        if(currentUserTry == 5) {
            console.log('max tries');
            userInput.style.display = 'none';
        }

        currentUserTry++;
        userInput.value = '';
    }

});

