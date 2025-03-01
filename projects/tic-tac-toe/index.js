let userA = null;
let allDiv = document.querySelectorAll(".gridDiv");

function tickAndCross() {
  allDiv.forEach((div) => {
    div.addEventListener(
      "click",
      () => {
        if (userA == true) {
          div.innerHTML = "<~>";
          userA = false;
        } else if (userA == false) {
          div.innerHTML = "X";
          userA = true;
        }
      },
      { once: true }
    );
  });
}
tickAndCross();

let tick = document.getElementById("tick");
let cross = document.getElementById("cross");
let userChosed = null;

tick.addEventListener("click", () => {
  userChosed = true;
});
cross.addEventListener("click", () => {
  userChosed = false;
});

let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");

startBtn.addEventListener("click", () => {
  if (userChosed == true) {
    userA = true;
    startBtn.setAttribute("disabled", "");
    cross.setAttribute("disabled", "");
    tick.setAttribute("disabled", "");
  } else if (userChosed == false) {
    userA = false;
    startBtn.setAttribute("disabled", "");
    cross.setAttribute("disabled", "");
    tick.setAttribute("disabled", "");
  } else if (userChosed == null) {
    alert("please Choose tick or cross");
  }
});

endBtn.addEventListener("click", () => {
  userA = null;
  userChosed = null;
  startBtn.removeAttribute("disabled");
  cross.removeAttribute("disabled");
  tick.removeAttribute("disabled");
  allImages.forEach((img) => {
    img.removeAttribute("src");
  });
  tickAndCross();
});
