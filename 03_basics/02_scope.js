//SCOPE//
// anything we do under{} is called scope in functions or if else statement//
// anything inside scope ends in scope ,it shoulld not come out of scope//
// but when we use var to declare any variable , it creates problem , tehrefore we ignore using var//

//var c = 300 
let a = 300
if(true){
    let a = 10 
    const b =20
    //var c = 30
    console.log("innner a =",a);
    
    
}
console.log(a);
//console.log(b);
//console.log(c);

//NESTED SCOPE//
function one (){
    const username = "Sanskriti"

    function two(){
        const website = "VS Code"
        console.log(username); // can access because username is global for website
        
    }
    //console.log(website);// cannot access because execution of function two is inside scope
    two() // does not execute if previous line shows error
}
one()


if (true) {
    const username = "Sanskriti"
    if (username=="Sanskriti") {
        const website = " youtube"
        console.log(username + website);
        
    }
    
}

//***************** INNTERESTING CONCEPT **************//

function add1(num){
    return num +1
}
console.log(add1(5));// be written in beginning of funtion

const add2 = function(num){
    return num + 2
}
add2(5)





