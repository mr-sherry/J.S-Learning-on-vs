let table = document.querySelector("table");

window.addEventListener("keydown", function (e) {
  let tr = this.document.createElement("tr");
  table.appendChild(tr);
  if (e.keyCode == 32) {
    let td = this.document.createElement("td");
    td.innerText = "Space";
    tr.appendChild(td);
  } else {
    let td = this.document.createElement("td");
    td.innerText = e.key;
    tr.appendChild(td);
  }
  let td1 = this.document.createElement("td");
  td1.innerText = e.keyCode;
  tr.appendChild(td1);
  let td2 = this.document.createElement("td");
  td2.innerText = e.code;
  tr.appendChild(td2);
  console.log(e.key, e.keyCode, e.code);
});
