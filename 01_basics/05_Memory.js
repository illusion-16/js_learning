// Stack (Primitive) , Heap (Non-Primitive)

let myYouTubename = "kritiswrils.com "

let anothername = myYouTubename
anothername = "chaiaurcode"

/* so in stack we gett the copy of actual value 
so when we change the value the copy is changed not the actual value */


console.log(anothername); 
console.log(myYouTubename);

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}

let user2=user1

user2.email = "sanskriti@google.com"

console.log(user1.email);
console.log(user2.email);

/* in case of heap ,
a actual reference of teh value is passed , 
so if make nay changes it changes the actual value */
