let table = document.querySelector("table");

async function students() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let fData = await response.json();
  fData.forEach((student) => {
    let tr = document.createElement("tr");
    // console.log(student);
    let fields = ["id", "name", "username", "email", "phone", "website"];
    fields.forEach((field) => {
      let td = document.createElement("td");
      td.innerText = student[field];
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}
students();
