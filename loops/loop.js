let hello= null ?? undefined ?? null ?? 30 ?? "wee";
 console.log(hello);


let data=[3,4745,0,543,-13,-234,0,44,-24,657,-35,23,0];

let sepratedValues={
    positiveValues:[],
    totalPosVal:0,
    negativeValues:[],
    totalNegVal:0,
    totalZeroVal:0
};



for (let index = 0; index < data.length; index++) {
    const val = data[index];
    
    if (val > 0) {
        sepratedValues.positiveValues.push(val)
        sepratedValues.totalPosVal++
        
    }
    else if (val < 0) {
        sepratedValues.negativeValues.push(val)
        sepratedValues.totalNegVal++
    }
    else{
        sepratedValues.totalZeroVal++
    }
}
console.log("Seprated Values:",sepratedValues);


