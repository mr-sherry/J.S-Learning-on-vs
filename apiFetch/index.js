let api = "https://api.github.com/users/mr-sherry";
let xhr = new XMLHttpRequest();
xhr.open("GET", api);
xhr.send();

let heading = document.getElementById("hello");
let button = document.querySelector("button");

xhr.onreadystatechange = function () {
  let data = JSON.parse(this.responseText);
  button.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    heading.innerText = data[input];
    console.log(data);

    // console.log(input);
  });
};
