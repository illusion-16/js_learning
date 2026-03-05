function printmyname(){
    console.log("M");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("A");
    
}
printmyname() // after perinthesis it becomes execution  

function addTwoNos (num1,num2){ // parameters
    console.log(num1+num2);

}
addTwoNos(3,7) // normal addition // arguments
addTwoNos(3,"5") // concatinates
addTwoNos(3,null) // only 3

//another way for function 
function addTwoNos (num1,num2){ // parameters
  let result = num1+num2
  return result
}
const result = addTwoNos(3,7)
console.log("Result:",result);

//another way //
function loginUserMessage(username){
    if(username === undefined){ // can be writen as - if(!username)
        console.log("please enter a username");
        
    }
    return `${username} just logged in` // if you dont want this staement to print once name is undefined then stop the process in if section by using return
}
console.log(loginUserMessage("Sanskriti")); // if we dont pass any argument then we get undefined as output


function calculateCartPrice(...num1){ //... is a spread operator as well as rest operator
    return num1
}
console.log(calculateCartPrice(20,30,50));

const user ={
    username: "Sanskriti",
    price: 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)

const  myNewArray =  [200,400,100,600]
function returnValue(getArray){
    return getArray[2]
}
console.log(returnValue(myNewArray));
