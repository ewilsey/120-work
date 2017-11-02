function setup() {  //setup
  createCanvas( windowWidth -20, windowHeight -20 ); //project size
  noCursor(); //remove cursor from canvas
  frameRate(8); //frame rate of animation
}

function draw() { //draw
  background( random(85), random(85), random(85) ); //dark background colors
  noFill(); //empty shapes
  strokeWeight( 11%3 ); //outline thickness
  stroke( random(20,255),random(20,255),random(20,255) ); //bright object colors
  for (let y = 0; y < height; y += 100) { // for loop funtion
	for (let x = 0; x < width; x += 100) { // for loop function
		ellipse(x, y, mouseX, mouseY); //change pattern based on mouse position
    }
  }
}
