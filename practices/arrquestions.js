//3. First Elements of Array

let fone=function (hello, n) {
    return hello.slice(0,n)
    
}
// console.log(fone([1,2,3,4,5],1));

//4. Last Elements of Array

let ftwo=function (hello2, n2) {
    return hello2.slice(-n2)
    
}
// console.log(ftwo([2,3,4,5,7,8],2));

//5. Join Array Elements

let fthree=function (hello3) {
    return hello3.join('-')
    
}
// console.log(fthree(['jbfjk','fnkif','kmdkwfd','kkkfkf']));

//21. Flatten Nested Array

let ffour=function (hello4) {
    return hello4.flat(2)
    
}
// console.log(ffour([1,2,3,4,5,6,7,8,['jdjd','fwef','dwe'],['fjiwef','jmfijmfei','jfoiejf',[98,9887,98765,876543,['aka','jkaja']]]]));


// 1. Check Array Input

let fany=function (hello5) {
    if (Array.isArray(hello5)) {
        return true
        
    }
    else{
        return false
    }
    
}
// console.log(fany([1,2,3,4]));

// 2. Clone Array

let func2= function (arr1) {
    return arr1.slice();

}
// console.log(func2([1,2,3,4,5,67]));

// 7. Sort Array

let func3=function (arr2) {
    return arr2.sort()
}
// console.log(func3([6,5,8,4,9,-7,5,-4]));

// 12. Sum and Product of Array

let func4=function (op,x,y) {
    if (op === "+") {
        return x + y;
    } 
    if (op === "*") {
        return x * y;
    }
    if (op === "/") {
        return x / y;
    } 
    if (op === "-") {
        return x - y;
    }
    else{
        return "please give operator"
    }
    
}
console.log(func4("",4,5));





