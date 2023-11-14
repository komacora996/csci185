function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
   let y= 0;
   let w = 50;
   let x = 0;
   while (y <=600){
        console.log(y,2 * y)
        //circle that goes horizontaly
        circle(x,200,w);
        x +=5;

        //vertically
        circle(100, y, w)
        circle(300, y *2, w)
        circle(500, y, w)
        circle(700, y *2, w)

   }
    
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}