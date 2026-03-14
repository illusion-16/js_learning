const coding =["java","js","python"]
const values = coding .forEach( (item) => {
    console.log(item);
    
})
console.log(values); // this shows that foreach does not return any value 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num >=5 )
//     console.log(newNums);
    
// another way  to write //
const newNums = []
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

//Filter///
const books =[
    {tile :"Book1", genre: "Murder Mystery", publish: 1991, edition:2000},
    {tile :"Book2", genre: "Fiction", publish: 1989, edition:2006},
    {tile :"Book3", genre: "Romance", publish: 1997, edition:2012},
    {tile :"Book4", genre: "Thriller", publish: 1978, edition:1999},
    {tile :"Book5", genre: "Science", publish: 1992, edition:2010},
    {tile :"Book6", genre: "Thriller", publish: 1998, edition:2008},
    {tile :"Book7", genre: "Murder Mystery", publish: 2004, edition:2015},
]
let userbook = books.filter( (bk) => bk.genre === "Murder Mystery")
userbook = books.filter((bk) => bk.publish >= 1991)
console.log(userbook);


const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumns = myNumber.map((num) => num + 10)
// console.log(newNumns);

//Chaining // using two or more method together
const newNumns = myNumber
                .map( (num) => num*10)
                .map((num) => num+1)
                .filter((num) => num>=50)
console.log(newNumns);
