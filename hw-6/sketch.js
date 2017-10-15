// Global variables
var cc; //canvas color


//setup
function setup() {
  cc=color( 'rgb(134, 27, 27)' );
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
  // show borders.

  rect( borderL ++, 0, borderL ++, height ); // (pos left/right, pos up/down, width, height)
  rect( borderR --, 0, borderR --, height );
  rect( 0, borderC, width, borderC );
  rect( 0, borderF, width, borderF );
  noFill();
  stroke( random(255), random(255), random(255) );

  var cSize = random( 10, width-20 );
  ellipse( width/4, height/4, cSize );


}
