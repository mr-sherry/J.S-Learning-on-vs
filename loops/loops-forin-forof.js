let a= [23,43,56,65,879,90,0,-2,'ahmed',null,undefined]

for (const hello of a) {
    if (hello<=0) {
        // console.log(`${hello} is not positive value`);
        continue;
    }
    else if (hello === !Number) {
        // console.log(`${hello} is not a number`);
        continue;
    }
    else{
        // console.log(`Square of ${hello} is ${hello*hello}`);
    }
}



//Filter Strings: Write a for...of loop to iterate over an array of strings ["dog", "cat", "elephant", "lion"] and log only the strings with more than 3 letters.
let b=['ali','ahmed','raza','bro']

for (const hello1 of b) {
    if (hello1 ) {
        
    }
}


let arr=[2,2,3,3,4,5,6]
let sum=0;

for (const hello3 of arr) {
    sum=hello3+sum;
}
// console.log(sum);



//Write a for...of loop to iterate over a string (e.g., "alice") and log each character of the string.
let str='Ahmed 1';

for (const hello5 of str) {

    //(hello5 >= "a"||"A" && hello5 <= "z"||"Z" )

    if ((hello5 >= "a" && hello5 <= "z" )|| (hello5 >= "A" && hello5 <= "Z")) {
   // if ((hello5 >= "a"|| hello5 >="A" && hello5 <= "z"|| hello5 <="Z" )) {
        console.log(hello5); 
    }
    else if(hello5 == ' '){
        console.log('Space');
    }
    else{
        console.log(`${hello5} is not a charactor`);
    }
}


//Iterate Over Object Properties: Write a for...in loop to log the keys of the object.
const student = {
     name: "ahmed", 
     age: 21, 
     grade: "A",
};
let count=0;

for (const key in student) {
   // console.log(key);
   // console.log(student[key]);
    count++;
}
//console.log(`Total Keys = ${count}`);


const prices = { 
    apple: 2, 
    banana: 1, 
    cherry: 3,
    bananas: 1, 
    cherries: 3
};

for (const key in prices) {
    if (typeof prices[key] == "number") {
       // console.log(`${key}: ${prices[key]*2}`);
    }
}