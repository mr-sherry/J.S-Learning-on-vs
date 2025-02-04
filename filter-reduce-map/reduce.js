let array=[1, 2, 3, 4, 5]; // Output: 15
let sumArr=array.reduce((accu,val)=> accu+val);
// console.log(sumArr);



let array1=[2, 3, 4]; // Output: 24
let multiArr=array1.reduce((accu,val)=>accu*val);
// console.log(multiArr);



let array2=[10, 25, 30, 5]; // Output: 30
let findMax=array2.reduce((accu,val)=>
{
  console.log(` acc val : ${accu} , val : ${val}`);
  return    accu>val ? accu:val

  
}
,0);
console.log(findMax);



let words=["apple", "banana", "apple", "orange", "banana", "apple"];
// Output: { apple: 3, banana: 2, orange: 1 }
let countWords=words.reduce((accu,word)=>{
  console.log(`${accu} value ${word}`);
  
  accu[word]=(accu[word] || 0)+1; 
return accu;},{});
console.log(countWords);



let array4=[[1, 2], [3, 4], [5, 6]];
// Output: [1, 2, 3, 4, 5, 6]
let flat=array4.reduce((accu,arr)=>accu.concat(arr));
// console.log(flat);



const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  // Output: { 1: "Alice", 2: "Bob", 3: "Charlie" }
  
  let obj=users.reduce((accu,key)=>{
    accu [key.id]=key.name;
    return accu;
  },{})
  // console.log(obj);
  
  let cart=[
    {name:"shirt", price:500},
    {name:"shoe", price:500},
    {name:"pant", price:1000}
  ]
  let total=cart.reduce((accu,key)=>{
    let total1=accu+key.price

    return total1
  },0)
  console.log(total);
  