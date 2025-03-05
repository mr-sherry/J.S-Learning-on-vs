let heading = document.getElementById("hello");
let button = document.querySelector("button");

// let api = "https://api.github.com/users/mr-sherry";
// let xhr = new XMLHttpRequest();
// xhr.open("GET", api);
// xhr.send();

// xhr.onreadystatechange = function () {
//   let data = JSON.parse(this.responseText);
//   button.addEventListener("click", () => {
//     let input = document.getElementById("input").value;
//     heading.innerText = data[input];
//     console.log(data);

//     // console.log(input);
//   });
// };

async function hello() {
  let data = await fetch("https://api.github.com/users/mr-sherry");
  let data1 = await data.json();
  // console.log(data1);

  button.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    heading.innerText = data1[input];
    // console.log(data);

    // console.log(input);
  });
}
hello();
