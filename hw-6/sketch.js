// Global variables
var cc; //canvas color


//setup
function setup() {
  cc=color( random(55), random(55), random(55) );// generates 1 random darkened background.
  createCanvas( windowWidth, windowHeight );
  background( cc );

}
// variables


// draw
function draw() {
  var borderL = 0;
  var borderR = width -2;
  var borderC = 0;
  var borderF = height -2;


  push();   // start ellipse animation and create animated borders.
  frameRate(5);
  noFill();
  stroke( random(255), random(255), random(255) );//rainbow borders
  rect( borderL ++, 0, borderL ++, height ); // left (pos left/right, pos up/down, width, height)
  rect( borderR --, 0, borderR --, height ); // right
  rect( 0, borderC, width, borderC ); //top
  rect( 0, borderF, width, borderF ); //bottom
  noFill();
  stroke( random(255), random(255), random(255) );//color ellipse


  var cSize = random( 10, width-20 ); //randomize size
  ellipse( random(width/2), random(height/2), cSize ); //random placement + random size
  pop(); // end ellipse animation




}
