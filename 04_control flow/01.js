//Control flow //
// < , > , <= , ==, != , ==, !==

const temperature = 41
if (temperature <= 50) {
    console.log("less than 50");
    
}else {
console.log("temperature is greater than 50");
}


const score = 200 
if (score>100){
    const power ="FLY" // but if we use var instead of const here , then power can be used globally 
    console.log(`User Power : ${power}`);
    
}
//console.log(`User Power : ${power}`); // error because we cannot acess power outside if scope


const balance = 1000
if (balance < 500) {
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("NOT DESIRED VALUE ");
    
}


const userlogggedin = true
const debitCard = true 
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userlogggedin && debitCard){
    console.log("Allow to buy course");
    
}
if (loggedinfromgoogle || loggedinfromemail){
    console.log("User logged");
    
}

//Switch Case //

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuarary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default");
         break;
}