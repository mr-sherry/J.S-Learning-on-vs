function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(randomColor());

let newInt;

const startRandomColor = () => {
  newInt = setInterval(() => {
    let newColor = randomColor();
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        document.querySelector(`#d${i}`).style.backgroundColor = newColor;
      }, i * 150);
    }
    setTimeout(() => {
      for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
          document.querySelector(`#d${i}`).style.backgroundColor = "white";
        }, i * 150);
      }
    }, 1500);
  }, 3000);
};

const stopRandomColor = () => {
  clearInterval(newInt);
};

document.querySelector("#start").addEventListener("click", startRandomColor);
document.querySelector("#stop").addEventListener("click", stopRandomColor);
