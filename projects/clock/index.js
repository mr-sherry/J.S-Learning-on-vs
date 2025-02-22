let div = document.getElementById("main-div");

// console.log(date);
// console.log(hours);
// console.log(minutes);
// console.log(sec);
setInterval(function () {
  let date = new Date();
  let s=date.format("hh:mm:ss tt")
  console.log(s);
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log(minutes);
  
  let sec = date.getSeconds();
  let time = `${hours}:${minutes}:${sec}`;

  div.innerText = time;
}, 1000);
