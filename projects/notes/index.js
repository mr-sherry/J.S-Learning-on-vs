let data = JSON.parse(localStorage.getItem("CreatedNote")) || [];
console.log(data);

let addBtn = document.getElementById("addBtn");
let delAllNotes = document.getElementById("delAllNotes");
let containerDiv = document.getElementById("container1");
let input = document.getElementById("messageBox");
addBtn.addEventListener("click", () => {
  let input1 = input.value;

  if (input1) {
    data.push(input1);
    console.log("first", input);

    hello();
    console.log("second", input1);
    input.value = "";
  }
});

let hello = () => {
  localStorage.setItem("CreatedNote", JSON.stringify(data));
  containerDiv.innerHTML = "";
  data.forEach((item, index) => {
    let maindiv = document.createElement("div");
    let pdiv = document.createElement("div");
    pdiv.classList = "divforp";
    let btnDiv = document.createElement("div");
    btnDiv.classList = "divforbtn";

    let text = document.createElement("p");
    text.innerText = item;

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<img src="./images/edit.png" alt="">`;
    //////////////////////edit btn/////////////////////////////////////////////
    editBtn.addEventListener("click", () => {
      let editInput = document.createElement("textarea");
      editInput.value = item;
      pdiv.removeChild(text);
      pdiv.appendChild(editInput);
      btnDiv.removeChild(editBtn);
      btnDiv.removeChild(delBtn);

      let updateBtn = document.createElement("button");
      updateBtn.innerHTML = `<img src="./images/update.png" alt="">`;
      btnDiv.appendChild(updateBtn);

      updateBtn.addEventListener("click", () => {
        let upDatedText = editInput.value;
        data.splice(index, 1, upDatedText);

        pdiv.removeChild(editInput);
        btnDiv.removeChild(updateBtn);
        pdiv.appendChild(text);
        btnDiv.appendChild(editBtn);
        hello();
      });
    });
    //////////////////////////del btn ///////////////////////////////////////
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<img src="./images/trash-bin.png" alt="">`;

    delBtn.addEventListener("click", () => {
      data.splice(index, 1);
      hello();
    });

    pdiv.appendChild(text);
    maindiv.appendChild(pdiv);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(delBtn);
    maindiv.appendChild(btnDiv);
    containerDiv.appendChild(maindiv);
  });
};
hello();
