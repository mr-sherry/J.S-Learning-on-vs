//Find the Most Frequent Element

const input1 = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1,9,10,2,2,2];
let mostFrequent=input1.reduce((acc,val)=>{
        acc[val]=(acc[val] || 0)+1;
        return acc;
},{})

console.log(mostFrequent);

// console.log(high);

