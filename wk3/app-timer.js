// message task

document.getElementById("msgBtn").addEventListener("click", () => {
  document.getElementById("message").removeAttribute("class");
  setTimeout(() => {
    document.getElementById("message").setAttribute("class", "hide");
  }, 5000);
});

// timer task

// globals

let count = 0;
let timer;

// listeners

document.getElementById("tmrBtnGo").addEventListener("click", timerGo);
document.getElementById("tmrBtnStop").addEventListener("click", timerStop);
document.getElementById("tmrBtnReset").addEventListener("click", timerReset);

// functions

function timerGo() {
  timer = setInterval(timerHandler, 1000);
}

function timerStop() {
  clearInterval(timer);
}

function timerReset() {
  count = 0;
  document.getElementById("timer").innerText = count;
}

function timerHandler() {
  count = count + 1;
  document.getElementById("timer").innerText = count;
}
