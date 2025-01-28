function hello(a,b,c,d) {
    let aaa= a*b+c
    
    console.log(aaa);
    console.log(aaa-d);
    
}
// hello(2,4,6,8)

function check(userName) {
    if (!userName) {
         return "please enter user name"
    }
    else{
        return `user ${userName} authorized`
    }
}
// console.log(check("Ahmed"));





function hello0(name) {
    return `Hello ${name}`;
}

function hello9(name) {
    const func1 = hello0(name);
    console.log(func1 + " Have a great day.");
}

// hello9("Ali"); 





function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } 
    else if (num < 0) {
        console.log(`${num} is negative`);
    } 
    else {
        console.log(`${num} is zero`);
    }
}

checkNumber(1);
  
function calcarea(length, width) {
    return length * width;
    
}
function disparea(length, width) {
    const area = calcarea(length,width);
    console.log(`area of rectangle length ${length} and width ${width} is ${area}.`);
}

// disparea(5,3);