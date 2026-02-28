const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros) //adds array into array (does not concatinate)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // not a good way to access elements 

const allHeros = marvel_heros.concat(dc_heros) // takes two array and conncatinates them in third array 
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // better alternative for concat
console.log(all_new_heros);

const Arr1  = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_Arr1 = Arr1.flat(Infinity) // all subarrys in one single array
console.log(real_Arr1);

console.log(Array.isArray('Sanskriti'))
console.log(Array.from('Sanskriti')) // makes array from given value
//from- Creates an array from an iterable object.

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.


