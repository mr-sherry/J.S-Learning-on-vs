let button = document.getElementById("genBtn");
let result = document.getElementById("result");


button.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  let input1=parseInt(input/4);
  let input3=input-(input1*3);
  
  

  if (input >= 6 && input <= 15) {
    let finalPass = [];

    let alphabets = [
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
    ];
    
    for (let index = 0; index < input1; index++) {
      let randomIndexOfAlphabets = Math.floor(Math.random() * alphabets.length);
      let hello = alphabets[randomIndexOfAlphabets];
      finalPass.push(hello);
    }

    let smallAlphabets = [
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
    ];
    for (let index = 0; index < input1; index++) {
      let randomIndexOfSmallAlphabets = Math.floor(Math.random() * smallAlphabets.length);
      let hello = smallAlphabets[randomIndexOfSmallAlphabets];
      finalPass.push(hello);
    }

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < input1; index++) {
      let randomIndexOfNumbers = Math.floor(Math.random() * numbers.length);
      let hello = numbers[randomIndexOfNumbers];
      finalPass.push(hello);
    }

    

    result.innerText = finalPass.join("");
  } else {
    result.innerHTML = "Please Enter Lenght Between 6 and 15";
  }
});
