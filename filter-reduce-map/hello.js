//Find the Most Frequent Element

const input1 = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1,9,10,2,2,2,1,1,1,4,4,4,4,4,4,4];
let mostFrequent=input1.reduce((acc,val)=>{
        acc[val]=(acc[val] || 0)+1;
        return acc;
},{})
console.log(mostFrequent);



let keys=Object.keys(mostFrequent);
console.log(`keys of object=`,keys);


let value=Object.values(mostFrequent);
console.log(`values of object=`,value);



let indexOfValue=value.reduce((acc,val,index)=>{
         return value[acc]<val ? index:acc;
},0)
console.log(`Index of max value=`, indexOfValue);



console.log(`Most Frequent Value =`,keys[indexOfValue]);





