let timer;
let seconds = 0;
const timerH2 = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


startBtn.addEventListener('click', function () {
    

    startBtn.setAttribute("Disabled","")
    stopBtn.removeAttribute("Disabled","") 

    timer = setInterval(() => {
        seconds++;
        timerH2.innerText = seconds;
    }, 1000);
});

stopBtn.addEventListener('click', function () {
    startBtn.removeAttribute("Disabled","")
    stopBtn.setAttribute("Disabled","")

    clearInterval(timer);
});
