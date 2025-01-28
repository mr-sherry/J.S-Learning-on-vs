let value;
let value2;

const aStudents= ["ali","ahmed","sherry","raza"]
console.log(aStudents);


aStudents[2]="shahid";

console.log(aStudents);

aStudents[3]="iqbal";

console.log(aStudents);


value=98
value2=90

 
console.log(`sum and muliply of two Values = ${value+value2*value2}`);



// Prefix and Postfixes
let exampleValue= 360;
let exampleValue2= ++exampleValue;

console.log("postfix increment");
console.log(exampleValue);
console.log(exampleValue2);

let exampleValue3= 360;
let exampleValue4= exampleValue3++;

console.log("prefix increment");
console.log(exampleValue3);
console.log(exampleValue4);

let exampleValue5= 360;
let exampleValue6= --exampleValue5;

console.log("postfix decrement");
console.log(exampleValue5);
console.log(exampleValue6);

let exampleValue7= 360;
let exampleValue8= exampleValue7--;

console.log("prefix decrement");
console.log(exampleValue7);
console.log(exampleValue8);


//strings
console.log("String all Methods");

let anyValue= String("Bahawalpur Punjab")
console.log(anyValue.charAt(8));
console.log(anyValue.length);
console.log(anyValue.indexOf('u'));
console.log(anyValue.slice(3,9));
console.log(anyValue.__proto__);
console.log(anyValue.toLowerCase());
console.log(anyValue.substring(11,17));

let id=Symbol('990');
let id1=Symbol('990');
console.log(id,id1);

console.log(id==id1);

let value0="Ali Raza Shahid"

let result= value0.charCodeAt(6);
console.log(result);


