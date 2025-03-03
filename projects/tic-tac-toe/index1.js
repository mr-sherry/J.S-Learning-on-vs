let userA = 2;
let allDiv = document.querySelectorAll(".gridDiv");
let startBtn = document.getElementById("startBtn");
let draw = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
let times = 0;

startBtn.addEventListener("click", () => {
  userA = 1;
  startBtn.setAttribute("disabled", "");
  addListeners();
});

/////////////////////tick and cross/////////////////////
function tickAndCross(e) {
  let div = e.target;
  if (userA === 1) {
    div.innerHTML = "O";
    userA = 0;
    let key = Number(div.id);
    let val = div.innerHTML;
    draw[key] = { val };
    times++;

    // console.log(draw[key].val);
  } else if (userA === 0) {
    div.innerHTML = "X";
    userA = 1;
    let key = Number(div.id);
    let val = div.innerHTML;
    draw[key] = { val };
    times++;
    // console.log(draw[key].val);
  } else {
    alert("please press Start btn");
  }
  checkWin();
}

//////////////////add start listener////////////////////////////////
function addListeners() {
  allDiv.forEach((div) => {
    div.addEventListener("click", tickAndCross, { once: true });
  });
}

//////////////////reset game////////////////////////////////////////////

function resetGame() {
  userA = 2;
  startBtn.removeAttribute("disabled");
  allDiv.forEach((div) => {
    div.innerHTML = "";
  });
  draw = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  allDiv.forEach((div) => {
    div.removeEventListener("click", tickAndCross);
  });
}
////////////////toast////////////////////////////////////////////////

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

//////////////////////////check winner///////////////////////////////////
function checkWin() {
  switch (true) {
    ////////////horizental
    case draw[0].val &&
      draw[0].val == draw[1].val &&
      draw[1].val == draw[2].val:
      showToast(`${draw[0].val} Wins`);
      resetGame();
      break;
    case draw[3].val &&
      draw[3].val == draw[4].val &&
      draw[4].val == draw[5].val:
      showToast(`${draw[3].val} Wins`);
      resetGame();
      break;
    case draw[6].val &&
      draw[6].val == draw[7].val &&
      draw[7].val == draw[8].val:
      showToast(`${draw[6].val} Wins`);
      resetGame();
      break;
    ////////////////////vertical/////////////////////////////////////

    case draw[0].val &&
      draw[0].val == draw[3].val &&
      draw[3].val == draw[6].val:
      showToast(`${draw[0].val} Wins`);
      resetGame();
      break;
    case draw[1].val &&
      draw[1].val == draw[4].val &&
      draw[4].val == draw[7].val:
      showToast(`${draw[1].val} Wins`);
      resetGame();
      break;
    case draw[2].val &&
      draw[2].val == draw[5].val &&
      draw[5].val == draw[8].val:
      showToast(`${draw[2].val} Wins`);
      resetGame();
      break;
    ////////////////////////////other
    case draw[0].val &&
      draw[0].val == draw[4].val &&
      draw[4].val == draw[8].val:
      showToast(`${draw[0].val} Wins`);
      resetGame();
      break;
    case draw[2].val &&
      draw[2].val == draw[4].val &&
      draw[4].val == draw[6].val:
      showToast(`${draw[2].val} Wins`);
      resetGame();
      break;
    case times == 9:
      showToast(`Game Draw`);
      resetGame();
  }
}
