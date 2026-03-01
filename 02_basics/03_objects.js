// object literals//

const mysyn = Symbol("key1")
const JsUser = {
    name: "Sanskriti", //  name is considered as string automatically in js 
    "full name":"Sanskriti Mishra",
    [mysyn]:"mykey1", // IMP:- to use symbol  as key we use[] , otherwise it would be a string  only
    age: 21,
    location:"Kolkata",
    email:"sanskriti@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser["age"]);
// console.log(JsUser[mysyn]);

// JsUser.email="sanskriti@chatgpt.com"
// Object.freeze(JsUser) // after using freeze i cannot make any changes in the value
// JsUser.email="sanskriti@yahoo.com"
// console.log(JsUser);

JsUser.greetingone = function(){
    console.log("Hello JS user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS user,  ${this.email}`);
}
console.log(JsUser.greetingone());
console.log(JsUser.greetingtwo());

// non singleton object//
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Conrad"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Conrad",
            lastname:"Fisher"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"S",2:"M"}
const obj2 = {3:"A",4:"M"}

const obj3 = {obj1,obj2}// obj inside obj
const obj4 = Object.assign({},obj1,obj2) // target source format , this one is preferred 
// console.log(obj3);
console.log(obj4);

const obj5 = {...obj1,...obj2} // another way off writing
console.log(obj5);


const users = [
    {
    id:1,
    email:"S@gmail.com"
},
{
    id:1,
    email:"S@gmail.com"
},
{
    id:1,
    email:"S@gmail.com"
}
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // accessing the keys of object 
console.log(Object.values(tinderUser)); // accessing the values of object 
console.log(Object.entries(tinderUser)); // key value pair , array insidde array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if the object hhas teh specific property

