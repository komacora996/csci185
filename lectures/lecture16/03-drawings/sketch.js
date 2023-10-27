function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

  // code here:

  drawCreature(100, 400, 'plum');
  drawCreature(250, 100, 'teal');
  drawCreature(500, 700, 'green');
  drawCreature(700, 600, 'lightBlue');
  drawCreature(300, 300, 'red');

  // for debugging:

  drawGrid(canvasWidth, canvasWidth);
}

function drawCreature(x, y) {
    fill(color);
    circle(x, y, 150); // base face shape
    fill("black");
    circle(x-20, y-20, 20);
    circle(x+20, y+20, 20);
}