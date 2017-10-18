
var cc; // Global variable i

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
  noCursor();//hide cursor
}

var shape_angle = 0;// Global variable ii

// draw
function draw() {

  var r = random(255);//red fill color
  var b = random(255);//blue fill color
  var g = random(255);//green fill color
  var r1 = random(255);//red stroke color
  var b1 = random(255);//blue stroke color
  var g1 = random(255);//green stroke color
  var rr = map( r, 0, 255, 30, 200 );// map reds to slightly lighter reds
  var bb = map( b, 0, 255, 80, 255 );//map blues to slightly lighter blues
  var gg = map( g, 0, 255, 150, 240 );//map greens to slightly lighter greens
  var r2 = map( r1, 0, 255, 40, 233 );// map reds to slightly lighter reds
  var b2 = map( b1, 0, 255, 70, 245 );//map blues to slightly lighter blues
  var g2 = map( g1, 0, 255, 50, 185 );//map greens to slightly lighter greens
  g2=g2 + abs(+1*(-random(31)));
  b2 = b2 + ceil(+1/(random(11)));
  r2 = r2 + floor(+1*(random(22)));

  push();   // start ellipse animation and create animated borders.

  frameRate( floor(6.998 * 2.666 ) );
  fill( rr, bb, gg, 128 ); // set opacity to 50%
  stroke( r2, b2, g2 );//color ellipse
  rotate(radians(shape_angle));
  shape_angle=shape_angle+60 * (20 -30) +39;

  var sSize = random( 10, width-20 ); //randomize shape Size

  rect( random( width/2 ), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size
  translate(  width/2, 0 ); //change quadrant
  ellipse(  random( width/2 ), random( height/2 ), sSize % PI*10 ); //random circles + constrained size
  translate(  0, height/2 ); //change quadrant
  rect( random( width/2), random( height/2 ), sSize % 30, sSize % 30 ); //random squares + constrained size
  translate( -width/2, 0 ); //change quadrant
  ellipse(  random( width/2 ), random( height/2 ), sSize % PI*10 ); //random circles + constrained size

  pop(); // end ellipse animation

}
