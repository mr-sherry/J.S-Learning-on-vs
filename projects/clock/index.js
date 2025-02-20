let div = document.getElementById("main-div");

// console.log(date);
// console.log(hours);
// console.log(minutes);
// console.log(sec);
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let time = `${hours}:${minutes}:${sec}`;

  div.innerText = time;
}, 1000);
