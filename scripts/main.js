const userInput = document.getElementById('userInput');
const guessResult = document.getElementById('guessResult');
const hintDisplay = document.getElementById('hints');
const tries = document.getElementById('tries');
userInput.focus();

// an array of words to pick from as secret word

// random number generated and used to select a word from the word list
const generateSecretWord = () => {
    let wordlist = ['green', 'tree', 'winter', 'snow', 'spring', 'fall', 'sunday']
    let randomNum = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomNum];
}
let secretWord = generateSecretWord();

const generateHint = () => {
    let arr = [];
    for(let i = 0; i <= Math.floor(secretWord.length / 3); i++) {
        arr.push(secretWord[i]);
    }
    return arr;
}
let hintArray = generateHint();
let currentUserTry = 7;

console.log(secretWord);
console.log(hintArray);

// display hint text for user
const generateGameDisplay = () => {
    hintDisplay.innerText = `The word has ${ secretWord.length} letters and starts with "${hintArray.join('')}"`;
    tries.innerText = `Current tries left: ${currentUserTry}`;
}
generateGameDisplay();

const resetGame = () => {
    currentUserTry = 7;
    guessResult.innerText = '';
    secretWord = generateSecretWord();
    hintArray = generateHint();
    generateGameDisplay();
    userInput.style.display = 'inline';

}

const newWord = document.getElementById('newWord');

newWord.addEventListener('click', function(){
    resetGame();
    console.log(secretWord);
});

// look for another listener because this fires for every button pressed might not be a good thing
userInput.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        currentUserTry--;
        if(userInput.value !== secretWord) {
            guessResult.innerText = `"${userInput.value}" was not the secret word`;
        }else if(userInput.value == secretWord){
            guessResult.innerText = `You got the secret word "${secretWord}" right!`;
        }
        if(currentUserTry < 1) {
            console.log('max tries');
            userInput.style.display = 'none';
        }

        userInput.value = '';
        // NOTE: duplicate, this can be refactored
        tries.innerText = `Current tries left: ${currentUserTry}`
    }
});
