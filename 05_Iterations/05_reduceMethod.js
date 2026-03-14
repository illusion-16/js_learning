const myNums = [1,2,3,4]
// const myTotal = myNums.reduce(function (acc , curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc+curval
    
// } , 0)
// console.log(myTotal);

// another way to write//
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName: "Devops course",
        price: 4999
    },
    {
        itemName:"App Development",
        price:3000
    },
    {
        itemName:"AIML",
        price: 5999
    },
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);
