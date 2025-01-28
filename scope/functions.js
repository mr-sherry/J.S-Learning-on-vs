let hello={
    name: "ali",
    class: "10th",
    age: 16,
    func: function () {
        console.log(`${this.name} is studying in ${this.class} class`);
    }
    
}
hello.class="11th"
hello.func();



let hello1={
    name: "ali",
    class: "10th",
    age: 16,
    func1: () => {console.log(`${this.name} is studying in ${this.class} class`)}
    
}
hello1.func1();



let func3= (a, b) =>  console.log(a*b);
func3(2,3);




function Hello3() {
    console.log(this.name);
}
  
const obj = { 
    name: "Ahmed" 
};

// Hello3.call(obj);



let x = 5;
 x += 10;
//  x *=10;
//  x /=10;
//  x -=10;

// console.log(x);

  