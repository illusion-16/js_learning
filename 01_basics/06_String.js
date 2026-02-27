// go tthrough string methods in mdn //

const name = "Sanskriti"
const age = 21
 
console.log( name + age + " value"); // outdated

console.log (`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Sans_kriti_16')
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,5)
console.log(anotherString)

const newString1 = "   sanskriti  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://sans.com/sanskriti%20mishra"
console.log(url.replace('%20', '-'))

console.log(url.includes('sans'));
console.log(url.includes('italy'));

console.log(gameName.split('_'));

// go tthrough string methods in mdn //




