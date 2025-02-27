let userA = null;
let allImages = document.querySelectorAll(".img1");
let times = 0;

function tickAndCross() {
  allImages.forEach((img) => {
    img.addEventListener(
      "click",
      () => {
        if (userA == true) {
          img.setAttribute("src", "./images/tick.png");
          userA = false;
          times++;
        } else if (userA == false) {
          img.setAttribute("src", "./images/cross.png");
          userA = true;
          times++;
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
  if (times == 9) {
    userA = null;
    userChosed = null;
    startBtn.removeAttribute("disabled");
    cross.removeAttribute("disabled");
    tick.removeAttribute("disabled");
    allImages.forEach((img) => {
      img.removeAttribute("src");
    });
    tickAndCross();
  }
});
