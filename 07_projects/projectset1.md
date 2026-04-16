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