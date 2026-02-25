let score = 33


console.log(typeof score);
console.log(typeof(score));

let valueInString = String(score) //converting number to string
console.log(typeof valueInString);

let score1 = "33abc";
let valueInNumber = Number(score1) 
console.log(typeof valueInNumber); // shows thats output is number
console.log(valueInNumber) //when we check the value it shows NaN which means not a no.
// while converting it can show that type is a no. but when we check the value it might not be the number 

//"33" =>33
// "33abc" => NaN
// true =>1; false => 0 

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// 1 => true ; 0 => false 
// "" => false 
// "sanskriti" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber); // even though  the outut is a number thee type of outpuut is string 

// ************************ OPERATIONS *******************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " javascript"
let str3 = str1 +str2 
console.log (str3);
