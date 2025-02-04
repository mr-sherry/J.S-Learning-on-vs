const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);



const input = [[1, 2, 3], [4, 5], [6, [7, 8]]];

let flatten=input.reduce((acc,arr)=>{
    return acc.concat(arr).flat(Infinity)
})

// console.log(flatten);



//Find the Most Frequent Element

const input1 = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1,9,10];
let mostFrequent=input1.reduce((acc,val)=>{

})
// console.log(mostFrequent);



const transactions = [
    { category: "Food", amount: 20, quantity: 2 },
    { category: "Transport", amount: 15, quantity: 1 },
    { category: "Food", amount: 10, quantity: 1 },
    { category: "Shopping", amount: 50, quantity: 3 },
    { category: "Transport", amount: 20, quantity: 2 },
    { category: "Food", amount: 15, quantity: 2 }
];
 
let totalTrans=transactions.reduce((acc,val)=>{
    // acc[val.category]=(acc[val.category] || 0) + val.amount
    acc[val.category]=(acc[val.category] || 0) + val.quantity
    console.log(`${acc[val.category]}`);
    
    return acc
},{})

console.log(totalTrans);
