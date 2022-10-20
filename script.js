console.log("working");
//grab elements
const button = document.querySelector("#click1");
const button1 = document.querySelector("#click2");
const button2 = document.querySelector("#click3");

// const window1 = document.querySelector("#test");
const toggle = document.querySelector("#toggle");

const window1 = document.querySelector(".drag-window1");
const window2 = document.querySelector(".drag-window2");
const window3 = document.querySelector(".drag-window3");
const window4 = document.querySelector(".drag-window4");
const window5 = document.querySelector(".drag-window5");
const closed = document.querySelector("#close");
const closedWindow2 = document.querySelector("#close-window2");
const closedWindow3 = document.querySelector("#close-window3");
const closedWindow4 = document.querySelector("#close-window4");
const closedWindow5 = document.querySelector("#close-window5");

const clicked = () => {
  const sound = new Audio("./material/click.wav");
  sound.volume = 0.3;
  sound.play();
};

// jq
$(document).bind("mousemove", (e) => {
  $("#follow").css({
    left: e.pageX + 15,
    top: e.pageY + 1,
  });
});

$(function () {
  $("#icon").draggable();
  $("#drag-icon").draggable();
  $("#drag-icon1").draggable();
  $("#drag-icon2").draggable();
  $("#drag-icon3").draggable();
  $("#drag-icon4").draggable();
  $("#drag-window").draggable();
  $(".drag-window1").draggable();
  $(".drag-window2").draggable();
  $(".drag-window3").draggable();
  $(".drag-window4").draggable();
  $(".drag-window5").draggable();
  $(".side-icon").draggable();
  $(".side-icon1").draggable();
  $(".side-icon2").draggable();
  $(".side-icon3").draggable();
});

//listeners
button.addEventListener("click", () => {
  const sound = new Audio("./material/min.wav");
  sound.volume = 0.3;
  sound.play();
});

button1.addEventListener("click", () => {
  const sound = new Audio("./material/DING.WAV");
  sound.volume = 0.3;
  sound.play();
});

button2.addEventListener("click", () => {
  const sound = new Audio("./material/error.wav");
  sound.volume = 0.3;
  sound.play();
  $("#drag-window").remove();
});

toggle.addEventListener("click", () => {
  if (window1.style.display !== "none") window1.style.display = "none";
  else window1.style.display = "block";

  if (window2.style.display !== "none") window2.style.display = "none";
  else window2.style.display = "block";

  if (window3.style.display !== "none") window3.style.display = "none";
  else window3.style.display = "block";

  if (window4.style.display !== "none") window4.style.display = "none";
  else window4.style.display = "block";

  if (window5.style.display !== "none") window5.style.display = "none";
  else window5.style.display = "block";
});

closed.addEventListener("click", () => {
  if (window1.style.display === "block") window1.style.display = "none";
});

closedWindow2.addEventListener("click", () => {
  if (window2.style.display === "block") window2.style.display = "none";
});

closedWindow3.addEventListener("click", () => {
  if (window3.style.display === "block") window3.style.display = "none";
});

closedWindow4.addEventListener("click", () => {
  if (window4.style.display === "block") window4.style.display = "none";
});

closedWindow5.addEventListener("click", () => {
  if (window5.style.display === "block") window5.style.display = "none";
});
