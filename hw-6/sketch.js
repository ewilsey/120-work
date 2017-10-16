// Global variables
var cc; //canvas color


//setup
function setup() {
  var rx = random(55);
  var bx = random(55);
  var gx = random(55);

  cc=color( rx, bx, gx );// generates 1 random darkened background.
  createCanvas( windowWidth, windowHeight );
  background( cc );

}
// Global variables ii


// draw
function draw() {
  var r = random(255);//red fill color
  var b = random(255);//blue fill color
  var g = random(255);//green fill color
  var r1 = random(255);//red stroke color
  var b1 = random(255);//blue stroke color
  var g1 = random(255);//green stroke color

  push();   // start ellipse animation and create animated borders.
  frameRate( floor(6.998) );
  fill( r, b, g, 128 ); // set opacity to 50%
  stroke( r1, b1, g1 );//color ellipse

  var sSize = random( 10, width-20 ); //randomize shape Size

  rect( random( width/2 ), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size
  translate(  width/2, 0 ); //change quadrant
  ellipse(  random( width/2 ), random( height/2 ), sSize % 30 ); //random circles + constrained size
  translate(  0, height/2 ); //change quadrant
  rect( random( width/2), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size
  translate( -width/2, 0 ); //change quadrant
  ellipse(  random( width/2 ), random( height/2 ), sSize % 30 ); //random circles + constrained size
  pop(); // end ellipse animation




}
