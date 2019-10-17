function setup(fruit) {
	createCanvas(600, 400);
}

function draw() {
	background(50,100, 200) ;
	var x = mouseX;
	var y = mouseY;
	var offset = 100;

	noStroke();
	circle( x, y, 140, height);
	rect( x, y, 100, height);
	fill("lavender")
     
	ellipse(300, 188, 50, 100);
    
    
	rect(90, 90, 155, 155);
    circle(88, 240, 70);
    circle(245, 240, 70);    
}

