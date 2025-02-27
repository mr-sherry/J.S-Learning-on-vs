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

let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");

startBtn.addEventListener("click", () => {
  userA = true;
  startBtn.setAttribute("disabled", "");
  times = 0;
});

endBtn.addEventListener("click", () => {
  if (times == 9) {
    userA = null;
    startBtn.removeAttribute("disabled");
    allImages.forEach((img) => {
      img.removeAttribute("src");
    });
    tickAndCross();
  }
});
