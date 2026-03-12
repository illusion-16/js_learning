// FALSY VALUE //
//false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN

//TRUTHY VALUE//
// "0" , 'false' , " " , [] , {} , function(){} 

const array =[]
if (array.length===0) {
    console.log("Array is Empty");
}


const EmptyObject = {}
if (Object.keys(EmptyObject).length===0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undeffined //
//(used during database)

let val1;
//val1 = 5 ?? 10 
//val1 = null ?? 10 
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//TERNARY OPERATOR //

//condition ? true : false
const ColdcoffeePrice = 189
ColdcoffeePrice >=100 ? console.log("Not in offer"):console.log("In offer");

