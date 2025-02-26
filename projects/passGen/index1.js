let data = [
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];

let button = document.getElementById("genBtn");
let result = document.getElementById("result");

button.addEventListener("click", () => {

  let input = document.getElementById("input").value;
  let input1=parseInt(input/4);
  let input3=input-(input1*3);
  
  let finalPass = [];


  if (input >= 6 && input <= 15) {
    data.forEach((arr) => {
      for (let index = 0; index < input1; index++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        // console.log("random index",randomIndex); // 0
        
        let hello = arr[randomIndex];
        // console.log("hello index",hello); //A

        finalPass.push(hello);
        // console.log(finalPass);
        
      }
    });
    
    let specialChar = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "-",
      "=",
      "{",
      "}",
      "[",
      "]",
      ":",
      ";",
      "'",
      "<",
      ">",
      "?",
      "/",
      "|",
      "~",
    ];
    for (let index = 0; index < input3; index++) {
      let randomIndexOfSymbols = Math.floor(Math.random() * specialChar.length);
      let hello = specialChar[randomIndexOfSymbols];
      finalPass.push(hello);
    }

    result.innerText = finalPass.join("");
    
  } else {
    result.innerHTML = "Please Enter Lenght Between 6 and 15";
  }
});
