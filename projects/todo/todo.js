let arr = [];
// console.log(arr);
let ulList = document.getElementById("ulMain");
let crBtn = document.getElementById("addBtn");

crBtn.addEventListener("click", () => {
  let input = document.getElementById("Input").value;
  if (input) {
    arr.push(input);
    document.getElementById("Input").value = "";
    hello();
  }
});

let hello = () => {
  ulList.innerHTML = "";

  arr.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${index}: ${item} `;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Del";

    delBtn.addEventListener("click", () => {
      arr.splice(index, 1);
      hello();
    });

    li.appendChild(delBtn);
    ulList.appendChild(li);
  });
};
