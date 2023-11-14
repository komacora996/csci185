// let x = 100;
// let y = 200;
// let width = 50;
// let speed = 10;

const c1 = {
    x = 100,
    y = 200,
    width = 150
};


let x1 = 1200;
let y1= 300;
let width1 = 100;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;
    y +=2;
    x1-= speed;

   
    

    clear();
    fill("hotpink");
    circle(x, y, width);
    circle(x1, y1, width1);
    drawGrid(canvasWidth, canvasHeight);
}
