let hello=new Date('2021-05-10 12:02:40z')
console.log(hello.toDateString());
console.log(hello.toLocaleString());
console.log(typeof hello);
console.log(hello.toISOString());

let hello2=Date.parse('2021-05-10')//CONVERT TO MILLI SECOND

console.log(hello2);

let hello3=new Date(hello2)//MILLI SECOND TO SIMPLE DATE
console.log(hello3);









