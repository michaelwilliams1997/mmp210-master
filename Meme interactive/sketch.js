var img;

function preload() {
	img = loadImage("images/ohdam.jpg");
}

function setup() {
   var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges
}

function draw(){
	image(img, 0, 0);

 var caption = "i whip";
    
    if (mouseX > width/2 && mouseY < height/2) {
        caption = "my";
    } else if (mouseX < width/2 && mouseY > height/2) {
        caption = "tail!";
    } else if (mouseY > height/2) {
        caption = "Back and Forth!";
    }
    
    
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    fill("yellow");
    stroke("white");
    strokeWeight(8);
    text(caption, width/2, height/2);
}
	