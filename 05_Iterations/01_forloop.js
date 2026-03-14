// For loop //
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
        console.log("mid");
        
    }
    console.log(element);
    
}

for (let i= 1; i<= 10; i++) {
    console.log(`outer loop values ${i}`);
    
    for (let j = 1; j <=10; j++) { // to select all occurencce use ctrl+shift+l
       console.log(i+ '*' + j + '=' + i*j);   
    }
    
}

let myArray = ["Ironman","Thor","Hulk"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// Break and Continue //

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("detected 5");
        //break
        continue
    }
    console.log(`Value of i is ${i}`);
}