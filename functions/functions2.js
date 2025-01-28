function combine(...arrays) {
    return arrays.flat(Infinity);
}
  
const result = combine([1, 2,[2,3,["hello","whyu"]]], [3, 4,[true,false]], [5, 6]);
// console.log(result);
  



let  students=["ahmed","ali","sherry"];

function studentName(index){
  console.log(students[index] !== undefined ? students[index] : "Student not found");

}
// studentName(1);





let user={
    name: "Ahmed Raza",
    age: 21,
    occupation: "Web Developer",
    country: "Pakistan"
};
// console.log(user.country);

function userData(obj, property){
    if(obj.hasOwnProperty(property)) {
      console.log(obj[property]);
      

    } 

    else{
      console.log(`"${property}" not found in the object`);
    }
}
userData(user,"country")
  








