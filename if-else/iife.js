
var h = 4;
h++;
console.log(h); 


(function () {
  var h = 0; 
  h++;
  console.log("Inner iife: " + h); 
})();

console.log("Outer iife: " + h);