//case 1//
console.log(2==1); //false
console.log (2>1); //true
console.log(2!=1); //true

// case 2 //
console.log("2">1); //true
console.log("02">1); // true 

/* the output for this case is true because js automatically converts 
 the given data into my desired datatype.
 but while doing comparision we must use 
 the same datatype values for error free code
*/

//case 3 //
console.log(null>0); // false
console.log(null== 0 ); //false
console.log(null >= 0); //true

/* the reason for such output is that an equality check == and 
comparisons >< >= <= work differently.
comparisions convert null to a number , treating it as 0.
That's why null>=0 iss true and null>0 is false.
*/ 

//case 4//
console.log (undefined == 0);
console.log (undefined > 0);
console.log (undefined < 0);

//the output for all of this will be false //

//case 5//
console.log ("2"=== 2); // false
/* === checks not only the value but also the datatype*/