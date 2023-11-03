let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    //left arrow moves circle left
    //right arrow moves cirle right
    //up arrow moves circle up
    //down arrow moves circle down
   noFill();
    if (ev.code ==="ArrowUp"){
    //do something: 
    y=y-3
} else if (ev.code==="ArrowDown"){
    y=y+3
} else if (ev.code==="ArrowRight"){
    x=x+3
} else if (ev.code==="ArrowLeft"){
    x=x-3
} else if (ev.code==="KeyW"){
    width = width + 3
} else if (ev.code==="KeyE"){
    width = width - 3
} else if (ev.code==="KeyR"){
    fillColor= "red";}
    else if (ev.code==="KeyB"){
        fillColor= "blue";}
    else if (ev.code==="KeyV"){
            fillColor="none";}
    // redraw circle:
    clear();
    fill(fillColor)
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
