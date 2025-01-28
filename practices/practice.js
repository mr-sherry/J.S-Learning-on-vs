let num= 30;
let numtostr=String(num)
// console.log(numtostr);
// console.log(typeof numtostr);

let str= 'hello';
let strtonum=Number(str);
// console.log(strtonum);

let date= new Date("12.01.2023")
// console.log(date);
// console.log(date.toString());

let specificDate = new Date(2025, 0, 15);
// console.log(specificDate);

let specificDateTime = new Date(2025, 0, 15, 10, 30, 0);
// console.log(specificDateTime);



// Array Funcion
let My = {
    name: "Ahmed",
    age: 19,
    intro: function() {
        return `Hello, my name is ${this.name}. My age is ${this.age}.`;
    }
};

// console.log(My.name);
My.age = 26;
// console.log(My.intro()); 


//If Else Example
let age = 17;
if (age >= 18) {
    // console.log("You are an adult.");
} else {
    // console.log("You are a minor.");
}

////////////////////////////////methods of string
let str1 = "   Hello, World";
let str2 = "Rare";
// console.log(str1.length);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.charAt(4));
// console.log(str1.indexOf("o"));
// console.log(str1.includes("World"));
// console.log(str1.substring(4, 9));
// console.log(str1.slice(4, 9));
// console.log(str1.trim());
// console.log(str1.replace("World", "JavaScript"));
// console.log(str1.split(","));
// console.log(str1.concat(", ", str2, "!"));
// console.log(str1.repeat(3));



/////////////////////////////////////////////Methods of Arrayus

let fruits = ["apple", "banana"];
fruits.push("cherry");
// console.log(fruits);

fruits.pop();
// console.log(fruits);

fruits.shift();
// console.log(fruits);

fruits.unshift("apple");
// console.log(fruits);

// console.log(fruits.length);

// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("grape"));

// console.log(fruits.includes("banana"));
// console.log(fruits.includes("grape")); 

let sliced = fruits.slice(0, 1);
// console.log(sliced);

fruits.splice(1, 1, "grape");
// console.log(fruits);

let vegetables = ["carrot", "lettuce"];
let combine = fruits.concat(vegetables);
// console.log(combine);

let result = fruits.join(", ");
// console.log(result);


fruits.sort();
// console.log(fruits);

let numbers = [40, 100, 1, 5];
numbers.sort();
// console.log(numbers);

////////////////////////spread operator
let number1 = [1, 2, 3];
let clone = [...number1];
// console.log(clone); 

//Spread for array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
// console.log(combined);

//Spread for objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let combined1 = { ...obj1, ...obj2 };
// console.log(combined1);


let str9 = "hello";
let any3 = [...str9];
// console.log(any3);


/////////////////////////////objects
let studentmarks = {
    name: "ali",
    grades: {
      math: 70,
      science: 92
    }
  };
  
  console.log(studentmarks.grades.math);
  