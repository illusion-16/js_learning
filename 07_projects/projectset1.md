# project related to DOM

# project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-nqxpsxku?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code 
## project 1

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target);
    if(e.target.id=='grey'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=='white'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor= e.target.id;
    }
  })
})
```

## Project 2

```javascript
const form = document.querySelector('form')
//extarct the values after submiting and not before submit=ing else it will show empty value 
form.addEventListener('submit',function(e){
  e.preventDefault()
  //to prevent any default suubmitting of the form
  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if(height==''|| height<0|| isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;//results.innerHTML=`${height}`;
  }else if(weight==''|| weight<0|| isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show result
    results.innerHTML=`<span>${bmi}</span>`;
  }
  
  
})
```

## Project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);

```
# Project 4
```javascript
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playgame = true;
let prevGuesses = [];
let numGuesses = 1;

if (playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guesses= parseInt(userInput.value);
    console.log(guesses);
    validateGuesses(guesses);
  });
}

function validateGuesses (guesses){
  // to ccheck where the user has give a valid no between 1-100 
  if(isNaN(guesses)){
  alert('Please Enter A valid number');
  }else if (guesses < 1){
    alert('Please Enter A number greater than 0 ');
  } else if (guesses > 100){
    alert('Please Enter A number less than or equal to 100');
} else {
  prevGuesses.push(guesses)
  if(numGuesses === 10){
    displayGuesses(guesses);
    displayMessage(`Game Over. The Random Number was ${randomNumber}`);
    endgame();
  } else {
    displayGuesses(guesses);
    checkGuesses(guesses);
  }
}
}

function checkGuesses (guesses){
  //to prinnt the valid nno. 
  if (guesses === randomNumber){
    displayMessage(`WOHOO!! You guessed it right`);
    endgame();
  } else if(guesses < randomNumber){
    displayMessage(`Number is TOOO Low`);
  }else if(guesses > randomNumber){
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuesses (guesses){
  // clean up method 
   userInput.value = '';
   guessSlot.innerHTML += `${guesses}  `;
   numGuesses++;
   remaining.innerHTML = `${11 - numGuesses} `;
} 

function displayMessage (message){
  //connects to dom to display the no. or msg and also clear them 
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = '<h2 id = "newgame"> Start new game  </h2>';
  startOver.appendChild(p)
  playgame=false
  newgame()
}

function newgame (){
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML= '';
    remaining.innerHTML = `${11 - numGuesses} `;
     userInput.removeAttribute('disabled', '');
     startOver.removeChild(p);
     playgame = true;
  });

}


```

