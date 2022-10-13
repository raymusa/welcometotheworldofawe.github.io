console.log("hello");
let images = [];
let index = 8;

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

  previous = createButton("Previous");
  previous.position(1370, 725);
  previous.mouseClicked(() => {
    if (index > 1) index--;
  });

  next = createButton("Next");
  next.position(1450, 725);
  next.mouseClicked(() => {
    if (index < images.length - 1) index++;
    console.log(index);
  });
}

function draw() {
  image(images[index], 0, 0);
}
