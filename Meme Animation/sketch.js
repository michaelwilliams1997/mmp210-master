var img;

function preload() {
    img = loadImage("images/ohdam.jpg");
}

function setup() {
    var canvas = createCanvas(640, 360);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
}

function draw() {
    image(img, 0, 0);

    var caption = "i whip";
    
    translate(width/2, height/2);
    
    var r = frameCount / 1000 * PI;
    rotate(r);
    

    if (mouseX > width / 2 & mouseY < height / 2) {
        rotate(r);
        caption = "my";
    } else if (mouseX < width / 2 && mouseY > height / 2) {
        rotate(r);
        caption = "tail!";
    } else if (mouseY > height / 2) {
        rotate(r);
       caption = "Back and Forth!";
    }

    

    rect(0, 0, 100, 100);


    textAlign(CENTER, CENTER);
    textSize(80);
    textFont("Comic Sans MS");
    fill("yellow");
    stroke("white");
    strokeWeight(8);
    text(caption, 0, 0);
}
