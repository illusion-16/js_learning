const user = {
    username:"Sanskriti",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // this - refers to current context
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username ="Sam"
user.welcomeMessage()

console.log(this); // blank braces

const name1 = function(){
    let username = "Sanskriti"
    console.log(this.username);
}
name1()
// this cannot be used in function , its only for object

// ARROW FUNCTION//
const arrow =()=> {
    let username1 = "Sans"
    console.log(this); // blank bracces

}
arrow()

//basic arrow  or eexplicit return// 
// const add2 = (num1,num2) => {
//     return(num1+num2)

// }
// console.log(add2(4,6));

//implicit arrow//
const add2 = (num1,num2) => (num1+num2)
console.log(add2(4,6));

/* NOTE :- IF WE USE {}, THEN RETURN STATEMENT IS REQUIRED
        ELSE IF WE USE (),THEN NO RETURN STATEMENT REQUIRED */

        