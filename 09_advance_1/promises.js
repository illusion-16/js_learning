// promise creation 
const promiseOne = new Promise(function(resolve,reject){
    //do an async task 
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // connects creation  and consumption
    }, 1000)
})

// promise consumption 
promiseOne.then(function(){
    console.log("promise consumed");
    
})
// 2nd promise  
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
    
})

// 3rd promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username: "Sanskriti",email: "kritisan2005@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
   console.log(user);
})

// 4th promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = false
        if (!error){
             resolve({username: "Sanskriti",email: "kritisan2005@gmail.com"})
        } else {
            reject('Error:something went wrong')
        }
        
    }, 1000);
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username // returing user name
})
.then((username) => { // when not error
    console.log(username);
})
.catch(function(error){ //when error
    console.log(error);
})
.finally(() => console.log("promise is either resolved or rejected"))

// 5th promise 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if (!error){
             resolve({username: "javascript", part: "9"})
        } else {
            reject('Error:js went wrong')
        }
        
    }, 1000);
});

async function consumepromiseFive(){ // async cannot handle errors thats why we use try 
  try{ // to handle errors we use this format
     const response =  await promiseFive 
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  
}
consumepromiseFive();

fetch ('https://jsonplaceholder.typicode.com/users') // fetchh runs before the rest of  the program 
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))