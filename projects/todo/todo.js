let ulList = document.getElementById("ulMain");
let crBtn = document.getElementById("addBtn");

let key = 1;

crBtn.addEventListener("click", () => {
  let input = document.getElementById("Input").value;
  if (input) {
    localStorage.setItem(key, input);
    document.getElementById("Input").value = "";
    hello(key);
    key++;
  }
});

let hello = (key) => {
  let li = document.createElement("li");
  li.innerHTML = localStorage.getItem(key);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Del";

  delBtn.addEventListener("click", () => {
    localStorage.removeItem(key);
    console.log(key);

    li.innerHTML = "";
  });
  li.appendChild(delBtn);
  ulList.appendChild(li);
};
