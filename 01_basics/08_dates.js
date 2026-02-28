// DATES//

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); //date
console.log(myDate.toLocaleString()); //date and time
console.log(myDate.toDateString()); // day and date
console.log(typeof myDate); // object


let myCreatedDate = new Date(2026,0,11) // 0 represents jan in js
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2026,0,11,11,11,11) 
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-11-2026") // format in mm/dd/yy
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()// we use this when we make poll and room booking apps where time in milisec matters

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // milisec
console.log(Math.floor(Date.now()/1000)); // seconds

myCreatedDate1.toLocaleString('default', { // using tolocalstring we can give format to time and dates 
    weekday: "long",
})






