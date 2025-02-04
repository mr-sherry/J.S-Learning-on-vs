const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected Output: [2, 4, 6, 8, 10]                       

let hello=numbers.filter((val)=> val % 2==0);
// console.log(hello);

//                          ===========next Question===========                     //    


const names = ["Alice", "Bob", "Amanda", "John", "Alex"];
// Expected Output: ["Alice", "Amanda", "Alex"]

let hello2=names.filter((name)=> name[0]=="A");
// console.log(hello2);

//                          ===========next Question===========                     //    

const numbers1 = [10, 55, 67, 30, 99, 21];
// Expected Output: [55, 67, 99]

let hello3=numbers1.filter((num)=> num>50);
// console.log(hello3);

//                          ===========next Question===========                     //    

const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
  ];
  // Expected Output: [{ name: "Alice", active: true }, { name: "Charlie", active: true }]

let activeUsers=users.filter((user)=>user.active);
// let activeUsers=users.filter((user)=>user.active == false);
// console.log(activeUsers);


//                          ===========next Question===========                     //    

const words = ["hello", "world", "JavaScript", "fun", "coding"];
// Expected Output: ["JavaScript", "coding"]

let filWords=words.filter((word)=>word.length == 10);
// console.log(filWords);

//                          ===========next Question===========                     //    

const values = [0, "Hello", "", undefined, "JavaScript", null, false, "Code"];
// Expected Output: ["Hello", "JavaScript", "Code"]

let truthyVal=values.filter((value)=>!!value);
// console.log(truthyVal);

//                          ===========next Question===========                     // 
//Given an array with duplicate numbers, return an array with only unique numbers.   

const numbers2 = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// Expected Output: [1, 2, 3, 4, 5, 6]

let uniqueNumbers=numbers2.filter((num1,index)=>index===num1);
// console.log(uniqueNumbers);

//                          ===========next Question===========                     // 
// Given an array of numbers, return only the prime numbers.



//                          ===========next Question===========                     // 


const scores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 50 }
];
// Expected Output: [{ name: "Alice", score: 85 }, { name: "Charlie", score: 75 }]

let result=scores.filter((student)=>student.score>=60)
// console.log(result);



