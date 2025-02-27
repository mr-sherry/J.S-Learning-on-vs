function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(randomColor());

let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;

const startRandomColor = () => {
  one = setTimeout(() => {
    document.querySelector("#d1").style.backgroundColor = "red";
  }, 100);
  two = setTimeout(() => {
    document.querySelector("#d2").style.backgroundColor = "red";
  }, 200);
  three = setTimeout(() => {
    document.querySelector("#d3").style.backgroundColor = "red";
  }, 300);
  four = setTimeout(() => {
    document.querySelector("#d4").style.backgroundColor = "red";
  }, 400);
  five = setTimeout(() => {
    document.querySelector("#d5").style.backgroundColor = "red";
  }, 500);
  six = setTimeout(() => {
    document.querySelector("#d6").style.backgroundColor = "red";
  }, 600);
  seven = setTimeout(() => {
    document.querySelector("#d7").style.backgroundColor = "red";
  }, 700);
  eight = setTimeout(() => {
    document.querySelector("#d8").style.backgroundColor = "red";
  }, 800);
  nine = setTimeout(() => {
    document.querySelector("#d9").style.backgroundColor = "red";
  }, 900);
  ten = setTimeout(() => {
    document.querySelector("#d10").style.backgroundColor = "red";
  }, 1000);

  one = setTimeout(() => {
    document.querySelector("#d1").style.backgroundColor = "white";
  }, 1100);
  two = setTimeout(() => {
    document.querySelector("#d2").style.backgroundColor = "white";
  }, 1200);
  three = setTimeout(() => {
    document.querySelector("#d3").style.backgroundColor = "white";
  }, 1300);
  four = setTimeout(() => {
    document.querySelector("#d4").style.backgroundColor = "white";
  }, 1400);
  five = setTimeout(() => {
    document.querySelector("#d5").style.backgroundColor = "white";
  }, 1500);
  six = setTimeout(() => {
    document.querySelector("#d6").style.backgroundColor = "white";
  }, 1600);
  seven = setTimeout(() => {
    document.querySelector("#d7").style.backgroundColor = "white";
  }, 1700);
  eight = setTimeout(() => {
    document.querySelector("#d8").style.backgroundColor = "white";
  }, 1800);
  nine = setTimeout(() => {
    document.querySelector("#d9").style.backgroundColor = "white";
  }, 1900);
  ten = setTimeout(() => {
    document.querySelector("#d10").style.backgroundColor = "white";
  }, 2000);
};

const stopRandomColor = () => {
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
  //   setTimeout;
};

document.querySelector("#start").addEventListener("click", startRandomColor);
document.querySelector("#stop").addEventListener("click", stopRandomColor);
