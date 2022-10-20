console.log("hello");

document.querySelector("#previous").addEventListener("click", () => {
  if (index > 1) index--;
  const sound = new Audio("./material/click.wav");
  sound.play();
});

document.querySelector("#next").addEventListener("click", () => {
  if (index < images.length - 1) index++;
  const sound = new Audio("./material/click.wav");
  sound.play();
});

let images = [];
let index = 1;

let previous, next;

function preload() {
  for (let i = 1; i <= 8; i++) {
    images[i] = loadImage(`./material/art-images/img${i}.png`);
  }
}

console.log(images);
function setup() {
  let canvas = createCanvas(574, 555);
  canvas.parent("p5-sketch");
}

function draw() {
  image(images[index], 0, 0);
}
