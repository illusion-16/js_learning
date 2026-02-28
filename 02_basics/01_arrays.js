// array //

// NOTES//
/* 1.JavaScript arrays are resizable and 
can contain a mix of different data types.
2.JavaScript arrays are not associative arrays and so,
 array elements cannot be accessed using arbitrary strings as indexes.
3.JavaScript arrays are zero-indexed:
 the first element of an array is at index 0.
4.JavaScript array-copy operations create shallow copies, (share the same reference)
which means that any changes made reflect in tehh main array.*/

const myArr = [0,1,2,3,4,5];
console.log(myArr);

const myHeros = ["Ironman","Captain America"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

// Array Methods //

// myArr.push(6) // addds this to the end
// myArr.pop() // removes the last element
// myArr.unshift(8) // adds element to the beginning 
// myArr.shift() // removes element from the beginning 

// console.log(myArr.includes(9)); // bolean datatype
// console.log(myArr.indexof(9)); // -1 (doesnot exists)


const newArr = myArr.join() // changes the dataype to string

console.log(myArr);
console.log(typeof newArr); 

// slice, splice //

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // original array remains same and we get the sliced value
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // spliced value is removed from the original array
console.log("C",myArr);
console.log(myn2);

