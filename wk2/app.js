const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", (event) => {
  console.log("Playing", event);
});

audio.addEventListener("pause", (event) => {
  console.log("Paused", event);
});

audio.addEventListener("ended", (event) => {
  console.log("Ended", event);
});

const playButton = document.getElementById("playButton");
playButton.addEventListener("click", (event) => {
  audio.play();
});

const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", (event) => {
  audio.pause();
});

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", (event) => {
  audio.pause();
  audio.currentTime = 0;
});

const slider = document.querySelector("input");
slider.addEventListener("change", (event) => {
  audio.volume = event.target.value;
});
