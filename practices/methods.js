let value0="Ali Raza Shahid "
let value3="Ahmed Raza Shahid"
let value00="       hello raza         "
let valuenum= "20";
let valuereplace="Ali Raza Shahid Ali Ali Ali"


//charCodeAt method convert string characters into ascii using index.....
let result= value0.charCodeAt(0);
console.log(result);

//at method used to find string charators using index value..
let method1= value0.at(2)
console.log(method1);

//direct property access using index number...
console.log(value0[2]);

//substr 
let method3= value0.substr(4, 4)
console.log(method3);

//substring
let method2= value0.substring(4, 9)
console.log(method2);

//concatinate method combine two strings 
let method4= value0.concat("and ",value3)
console.log(method4);

//trim method use to remove white spaces in string
let method5= value00.trim();
let method6= value00.trimStart();
let method7= value00.trimEnd();
console.log(method5);
console.log(method6);
console.log(method7);

//PADSTART AND PADEND
let method8= valuenum.padStart(9, "x")
let method9= valuenum.padEnd(9, "x")
console.log(method8);
console.log(method9);


//repeat method used to repeate string
let method10=value0.repeat(4)
console.log(method10);

//replace method this will replace only first value in string
let method11=valuereplace.replace("Ali","Shahzad")
// replaceAll will replace all values in the string
let method12=valuereplace.replaceAll("Ali","Shahzad")
console.log(method11);
console.log(method12);

//split method is used to seperate all characters using commas in string..
let method13=value0.split('',1)
console.log(method13);










