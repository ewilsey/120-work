// Global variables
var cc; //canvas color


//setup
function setup() {

  var rx = random(255);
  var bx = random(255);
  var gx = random(255);
  var red = map( rx, 0, 255, 45, 85 );// map reds to dark reds
  var blu = map( bx, 0, 255, 0, 50 );//map blues to dark blues
  var grn = map( gx, 0, 255, 0, 50 );//map greens to dark greens

  cc=color( red + 10, blu - 10, grn - 10 );// generates 1 random darkened background.
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
  var rr = map( r, 0, 255, 30, 200 );// map reds to dark reds
  var bb = map( b, 0, 255, 80, 255 );//map blues to dark blues
  var gg = map( g, 0, 255, 150, 240 );//map greens to dark greens
  var r2 = map( r1, 0, 255, 40, 233 );// map reds to dark reds
  var b2 = map( b1, 0, 255, 70, 245 );//map blues to dark blues
  var g2 = map( g1, 0, 255, 50, 185 );//map greens to dark greens
  g2=g2 + 1;
  b2 = b2 +1;
  r2 = r2 +1;



  push();   // start ellipse animation and create animated borders.

  frameRate( floor(6.998 * 0.666 ) );
  fill( rr, bb, gg, 128 ); // set opacity to 50%
  stroke( r2, b2, g2 );//color ellipse

  var sSize = random( 10, width-20 ); //randomize shape Size
  translate ( 0.5 * 2, 0.5 *2 );
  rect( random( width/2 ), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size

  translate(  width/2, 0 ); //change quadrant
  rotate( PI / 2.7 );
  ellipse(  random( width/2 ), random( height/2 ), sSize % 30 ); //random circles + constrained size

  translate(  0, height/2 ); //change quadrant
  rotate( PI * 3.3 );
  rect( random( width/2 ), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size

  translate( -width/2, 0 ); //change quadrant
  rotate( PI / 1.5 );
  ellipse(  random( width/2 ), random( height/2 ), sSize % 30 ); //random circles + constrained size

  pop(); // end ellipse animation




}
