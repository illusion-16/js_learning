// [{},{}]
const arr = [1,2,3,4,5]
// for of loop //
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(greet);
    
}

// Maps//
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

for (const [key,value] of map) {
    console.log(key , ':-', value);
    
}

// const myObject = { // this wont work because objects are not iterable
//     'game1':'Valo',
//     'game2':'BGMI'
// }
// for (const [key,value] of myObject) {
//     console.log(key , ':-', value);
    
// }

const myObject ={ // for objects we use for in loop
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for (const key in myObject) {
    // console.log(myObject[key]);
     console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program = ["js","rb","py","java","cpp"]
for (const key in program) {
    //console.log(key);
    console.log(program[key]);

}
    

// For Each loop //

const coding = ["js","rb","py","java","cpp"]
coding.forEach( function(item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item,index,array) => {
    console.log(index,item,array);
})

const myCoding =[{ // shift+alt+down arrow to copy same thing multiple timees
    languageName:"Javascript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
},
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})