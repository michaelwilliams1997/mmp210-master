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


	

	text("OH Hell Naw I Know", 20, 20);

	textSize(20);
	text( 20, 100);

	

	stroke('White');
	strokeWeight(10);
	textFont("menlo");
	text("tail at me its on NOW!" ,100, 200);
    text(" she did not just shake her", 50, 100);

}
