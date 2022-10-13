console.log("working");
//grab elements
const button = document.querySelector("#click1");
const button1 = document.querySelector("#click2");
const button2 = document.querySelector("#click3");

// jq
$(document).bind("mousemove", (e) => {
  $("#follow").css({
    left: e.pageX + 15,
    top: e.pageY + 1,
  });

  $("#follow").click(function () {
    $("span").stop();
  });
});

$("");

//listeners
button.addEventListener("click", () => {
  const sound = new Audio("./material/min.wav");
  sound.play();
  console.log("click");
});

button1.addEventListener("click", () => {
  const sound = new Audio("./material/DING.WAV");
  sound.play();
  console.log("click");
});

button2.addEventListener("click", () => {
  const sound = new Audio("./material/error.wav");
  sound.play();
  console.log("click");
});
