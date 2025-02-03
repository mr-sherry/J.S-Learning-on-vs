const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]
let squared = numbers.map((value) => {
    return value * value
})
//  console.log(squared);


const words = ['hello', 'world', 'javascript'];
// Expected output: ['HELLO', 'WORLD', 'JAVASCRIPT']
let upWords = words.map((word) => {
    return word.toUpperCase();
})
// console.log(upWords);

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
// Expected output: ['Alice', 'Bob', 'Charlie']
let extract = users.map((obj) => {
    return obj.name;
});
// console.log(extract);


const celsiusTemps = [0, 20, 30];
// Expected output: [32, 68, 86]
let convert = celsiusTemps.map((value) => {
    return value * 9 / 5 + 32;
})
// console.log(convert);




const numbers2 = [1, 2, 3, 4];
// Expected output: 
// [
//   { number: 1, type: 'odd' },
//   { number: 2, type: 'even' },
//   { number: 3, type: 'odd' },
//   { number: 4, type: 'even' }
// ]
let object = numbers.map((value) => {
    if (value % 2 == 0) {
        return {
            number: value,
            type: 'even'
        }
    }
    else if (value % 2 !== 0) {
        return {
            number: value,
            type: 'odd'
        }
    }
}, {});
// console.log(object);




const user1 = [
    { name: 'Alice', birthYear: 1990 },
    { name: 'Bob', birthYear: 1985 },
    { name: 'Charlie', birthYear: 2000 }
];

// Expected output:
//   [
//     { name: 'Alice', birthYear: 1990, age: 35 },
//     { name: 'Bob', birthYear: 1985, age: 40 },
//     { name: 'Charlie', birthYear: 2000, age: 25 }
//   ]

let modifiedUser1 = user1.map((prop) => {
    prop.age = 2025 - prop.birthYear
    return prop
})
// console.log(modifiedUser1);


const word1 = ['hello', 'world', 'map'];

// Expected output: ['olleh', 'dlrow', 'pam']
let reversed = word1.map((word) => {
    return word.split("").reverse().join("")

})
// console.log(reversed);



// Given an array of numbers, use the map() method to create a new array where each element is an object with the following properties:

// original: the original number.
// square: the square of the number.
// cube: the cube of the number.

const number4 = [1, 2, 3, 4];
let newData = number4.map((val) => {
    return {
        original: val,
        square: val * val,
        cube: val * val * val
    }
})
// console.log(newData);
