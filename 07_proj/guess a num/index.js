let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi =document.querySelector('.lowOrHi');

const startOver =document.querySelector('.resultParas');

const p =document.createElement('p')


let prevGuess =[]
let numGuess =1

let playGame =true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess =
    parseInt(userInput.value)

    validateGuess(guess)

  })

}


function validateGuess(guess){
  //check vbalue take is correct
  if(isNaN(guess)){
    alert('please enter valid no')

  }else if (guess <1){
    alert('please enter valid no greter than 1')

  }
  else if(guess >100){
    alert('please enter valid no small than 100')

  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMsg(`game over random no was${randomNumber}`)
      endGame()
    
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }


}

function checkGuess(guess){
  //check if correct display it using display guess

  if(guess === randomNumber){
    displayMsg(`You guessed it right`)
    endGame()

  }else if(guess < randomNumber){
    displayMsg(`no is too low`)

  }else if(guess > randomNumber){
    displayMsg(`no is too high`)

  }

  
}
function displayGuess(guess){
  //array display  remaning guess display 
  userInput.value =``;
  guessSlot.innerHTML += `${guess}  `;
  numGuess ++;
  remaining.innerHTML =`${11-numGuess}`
}
function displayMsg(message){
  //display msg if value is low or hi
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
  
}
function endGame(){
  userInput.value =``
  userInput.setAttribute('displaed','')  //after 10 no value will be taken
  p.classList.add('button')
  p.innerHTML =`<h2 id  ="newGame">Start new Game </h2>`;

  startOver.appendChild(p)
  playGame =false;
  newGame();
  
}

function newGame(){
  
  const newGame =document.querySelector('#newGame')

  newGame.addEventListener('click',function(e){
    randomNumber =parseInt(Math.random() * 100 + 1);
    prevGuess =[]
    numGuess =1
    guessSlot.innerHTML=``
    remaining.innerHTML =`${11 -numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame =true
  })
}