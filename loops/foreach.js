// let arr=[33,4324,346,567,789,'jdfc',"JDKFS",{name:'ahmed',rollno:10}]

// arr.forEach((any)=>{
//     if (typeof any=== 'object') {
//         // console.log(any.name);
//     }
//     else{
//         // console.log(any);
//     }
// });


//==================================== Another ========================================================


let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];
books.forEach((param) => {
    // console.log(`${param.title} By ${param.author}`);

});



//==================================== Another ========================================================



let fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grape", color: "Purple" }
];
fruits.forEach((param1) => {
    if ((param1.color === "Red") || (param1.color === "Purple")) {
        // console.log(param1.name);
    }
})


//==================================== Another ========================================================



let students = [
    { name: "Ahmed", grade: 85 },
    { name: "Ali", grade: 72 },
    { name: "Sherry", grade: 90 },
    { name: "Raza", grade: 68 },
    { name: "Amna", grade: 95 },
    { name: "Fatima", grade: 78 },
    { name: "Saima", grade: 82 },
    { name: "Hammad", grade: 48 },
    { name: "Shamsheer", grade: 79 }
];
let passedStudents = 0;
let failedStudents = 0;
students.forEach((param) => {
    if (param.grade >= 80) {
        // console.log(`${param.name} Passed with grade A`);
        passedStudents++;

    }
    else if (param.grade >= 70) {
        // console.log(`${param.name} Passed with grade B`);
        passedStudents++;
    }
    else if (param.grade >= 60) {
        // console.log(`${param.name} Passed with grade C`);
        passedStudents++;
    }
    else if (param.grade >= 50) {
        // console.log(`${param.name} Passed with grade D`);
        passedStudents++;
    }
    else {
        // console.log(`${param.name} is Not Passed`);
        failedStudents++;
    }
})
// console.log(`Total Passed Students ${passedStudents} and Total Failed Students ${failedStudents}`);


//==================================== Another ========================================================




let users = [
    { username: "user1", isOnline: true },
    { username: "user2", isOnline: false },
    { username: "user3", isOnline: false },
    { username: "user4", isOnline: true },
    { username: "user5", isOnline: false },
    { username: "user6", isOnline: true },
    { username: "user7", isOnline: false },
    { username: "user8", isOnline: false },
    { username: "user9", isOnline: true },
    { username: "user10", isOnline: true },
    { username: "user11", isOnline: true },
    { username: "user12", isOnline: false },
    { username: "user13", isOnline: true },
    { username: "user14", isOnline: false },
    { username: "user15", isOnline: true },
];

let online = 0;
let offline = 0;

let func = (cond) => {
    if (cond.isOnline === true) {
        online++;
    }
    else {
        offline++;
    }
}

users.forEach(func);
// console.log(`Online users ${online} and Offline users ${offline}`);



//==================================== Another ========================================================


let animals = [
    {
        species: "Dog",
        legs: 4
    },
    {
        species: "Bird",
        legs: 2
    },
    {
        species: "Spider",
        legs: 8
    },
    {
        species: "Cat",
        legs: 4
    },
    {
        species: "Human",
        legs: 2
    },
    {
        species: "Ant",
        legs: 6
    },
    {
        species: "Centipede",
        legs: 100
    },
    {
        species: "Kangaroo",
        legs: 2
    },
    {
        species: "Elephant",
        legs: 4
    },
    {
        species: "Crab",
        legs: 10
    },
    {
        species: "Octopus",
        legs: 8
    },
    {
        species: "Snake",
        legs: 0
    },
    {
        species: "Frog",
        legs: 4
    },
    {
        species: "Horse",
        legs: 4
    }
];

let func2 = (param5) => {
    if (param5.legs === 4) {
        param5.isMammal = 'true';
    }
    else {
        param5.isMammal = 'false';
    }
}
animals.forEach(func2)
// console.log(animals);



//==================================== Another ========================================================



//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 5, 3, 4, 7, 5, 6, 7, 3, 4, 5, 7, 5, 3, 6, 8]
let num=[1,2,3,7,7,8,8,7,7]
let count = 0;
let check = 7;//enter value to check
let func3 = (number) => {
    if (number === check) {
        count++;
    }
}

num.forEach(func3);

if (count===0) {
        console.log(`Value Not Matched in Array.`); 
}
else{
    console.log(`${check} occurred ${count} time in the Array.`);
};



