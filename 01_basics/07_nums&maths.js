const score = 250 
console.log(score);

const balance = new Number(150) // we r specifying the return type is a no. 
console.log(balance)

console.log(balance.toString().length); // even though the output is a no. its type is string so we can add string methods like length 
console.log(balance.toFixed(2)); // output upto 2 decimal place

const otherNumber = 256.7890
console.log(otherNumber.toPrecision(3)); // gives me the precise value in the desired length

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// adds formating in no.to make it look systematic
//u can mention in which couuntry format u want it like whether in indian format or US

//***************MATHS**************************//

console.log(Math); // object
console.log(Math.abs(-3)); // converts -ve value to +ve value but NOT viceversa
console.log(Math.round(5.67)); // gives the roundoff value
console.log(Math.ceil(4.32)); // more than 4 so it chooses top value i.e;5
console.log(Math.floor(3.2)); // choses the lower value
console.log(Math.min(2,5,1,4));
console.log(Math.max(2,5,1,4));

console.log(Math.random());//gives values between 0-1 always
console.log((Math.random()*10)+1);//to avoid 0 as output
console.log(Math.floor(Math.random()*10)+1); //gives aswer is systematic form

const min=10
const max=20
console.log(Math.floor(Math.random() *(max-min+1)));// though we get no. nnon 0 no. but min value is 10 
console.log(Math.floor(Math.random() *(max-min+1)+ min));