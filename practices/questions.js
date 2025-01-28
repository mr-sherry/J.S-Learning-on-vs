

//extract charactors
let extract= function (extract1) {
    return extract1.slice(0,9)
    
}
// console.log(extract('hello everyone how are you'));


//string to array of words
let strToArray= function (string1) {
    return string1.split(" ")
    
}
// console.log(strToArray('how are you'));

// capitize first word
let capital= function (lower) {
    return lower.charAt(0).toUpperCase()+ lower.slice(1).toLowerCase()
    
}
// console.log(capital('hello anyone is there'));


//Abbriviate name
let abbriviation= function (string3) {
    let first_name= string3.split(" ");

    return (first_name[0]+" " +first_name[1].charAt(0)+ ".");    
    
}
// console.log(abbriviation('Ahmed Raza'));


//replace upper to lower and lower to upper
// let swapcase=function (stringswap) {
//     return stringswap.replace
// }
// console.log(swapcase('hELLO bOY'));

// //camalize words
// let camalize= function (stringcamel) {
//     let words=stringcamel.split(" ")
//     return words[0].charAt(0).toLowerCase()+ words[1].charAt(0).toUpperCase(); 
// }
// console.log(camalize("camalize sentence"));


//repeat string
let repeatstr=function (str0, times) {
    return str0.repeat(times)
    
}
// console.log(repeatstr('hi',3));


//pad start function
let padstr=function (str1) {
    return str1.padEnd(9, "h");
    
}
console.log(padstr("45"));


//remove spaces from string
let spacerm= function (spacestr) {
    return spacestr.trim()
    
}
// console.log(spacerm("       hello  hello    "));

//sort string function
let sortstr= function (sortstr1) {
    return sortstr1.split("").sort().join("")
    
}

console.log(sortstr("cda"));


// Case-Insensitive Compare
let strcomp=function (stringone, stringtwo) {
    let hello=stringone.toUpperCase()  === stringtwo.toUpperCase()
    return hello
}
console.log(strcomp('Hello','Helli'));

// Uncapitize first word
let uncapital= function (uncap) {
    return uncap.charAt(0).toLowerCase()+ uncap.slice(1).toLowerCase()
    
}
console.log(uncapital('Hello anyone is there'));











