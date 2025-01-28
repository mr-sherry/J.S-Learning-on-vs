// program to display the sum of natural numbers

let total=0;
let s= 5;

for (let a = 1; a <= s; a++) {
    
    total = total+a; 
}
console.log(`The sum of numbers from 1 to ${s} is:${total}`);


let func=function (table) {
    if (table>0) {
        for (let i = 1; i <=10; i++) {
            console.log(`${table} * ${i} = ${table*i}`);
        }
    }

}
// func(20);


let num=5;

for (let index = 0; index <= num; index++) {
    // console.log(`${index} -> ${index*index}`);
    
    
}


let times = 0;

do {
  
  console.log("ahmed");
  if (times == 3) {
    console.log('hello');
    continue;
  }
  times++;
} 
while (times <= 5);
