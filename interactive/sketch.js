function setup(fruit) {
	createCanvas(600, 400);
}

var x = 300;
var y = 200;
var faceSize = 500;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(100, 0, 255);
    
    x = mouseX;
    y = mouseY;
    
    fill("Blue");
    noStroke();
    ellipse(x, y, faceSize, faceSize/2); // face
    
    stroke("red");
    noFill();
    strokeWeight(5);
    fill(250, 100, 100, 100);
   
    rect(x - 200, y - 150, faceSize/10, faceSize/5); // left eye
    triangle(
        x + 100, y - 100, 
        x + 100, y - 50, 
        x + 100, y - 50
    ); // right eye
    
    strokeWeight(10);
    stroke("black");
    line(
        x - 150, y + 150, 
        x + 100, y + 150
    ); // mouth
}
