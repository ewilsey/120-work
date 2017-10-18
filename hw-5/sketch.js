// one time function setup
function setup() {
  //fill window
  createCanvas( windowWidth, windowHeight );
}
  //set variables
var wheel_angle = 0;

var grass = 0;
var sky = 0;
var sun = 50;

  //endless-loop function draw
function draw() {

  //clear frame
  background ( 50, 155, 30 );

  //sky "background"
  fill( 0, 0, sky );
  rect( 0, 0, windowWidth , 400);
  sky = sky + 1;
  sky = sky % 255;

  //Sunny Sun Sunshine
  fill( sun, sun, 0 );
  ellipse( 515, 280, 100 );
  sun = sun + 1;
  sun = sun % 255;


  //hide cursor
  noCursor();



   //show frameRate
   var fr = frameRate();
   fill('white');
   text( "frame rate: " + fr, 10, 10 );
   //shows mouse coordinates from starting pos
   noStroke();
   fill('white');
   text("'mouseX': " + floor(mouseX), 10, 30 );
   text("'mouseY': " + floor(mouseY), 10, 50 );

  /*
  **********************************************
    TRUCK SANDBOX
  ******************************
   */
  push();

   //Truck follows mouse
   translate( mouseX, mouseY );

  push();

  push();
  //tail pipe
  rotate(radians(-3) );
  fill( 'black' );
  rect( -190, -13, 94 , 10 );
  pop();

  //side skirt
  fill( 'grey' );
  rect( -90, -5, 280 , 10 );
  fill( 'grey' );
  rect( 60, 15, 120 , 10 );
  fill( 'grey' );
  rect( 70, 5, 20 , 10 );
  fill( 'grey' );
  rect( 150, 5, 20 , 10 );

  //truck cab
  fill( 'red' );
  rect( 55, -192, 120 , 85, 05 );  // (pos left/right, pos up/down, width, height)
  fill( 'red'); //front angle
  noStroke();
  arc( 175, -195, 220, 180, radians(80), radians(90) );

  push();
  rotate(radians( -10));
  fill( 'rgb(145, 217, 244)' ); //front angle
  rect( 200, -158, 7, 80, 05 );
  pop();

  push();
  rotate(radians( 0));
  fill( 'rgb(145, 217, 244)' ); //front angle
  rect( 60, -188, 100, 75, 05 );
  rotate(radians( -10));
  fill( 'rgb(145, 217, 244)' ); //front angle
  rect( 164, -158, 30, 75, 05 );
  pop();

  //truck body
  fill( 'red' );
  rect( -185, -112, 480 , 110, 02 );

  //truck siding
  fill( 'rgb(122, 11, 18)' );
  rect( -185, -102, 480 , 90, 02 );

  //side mirror
  fill( 'grey' );
  rect( 135, -140 , 31, 30, 05 );
  fill( 'grey' );
  rect( 155, -120 , 16, 25, 20 );

  //door handle
  fill( 'grey' );
  rect( 65, -110 , 26, 7, 03 );

  //turn signal
  fill( 'yellow' );
  rect( 260, -60, 30, 10, 03 );

  //tail light
  fill( 'orange' );
  rect( -185, -90  , 30, 40, 03 );
  fill( 'white' );
  rect( -185, -80, 30, 10, 03 );
  fill( 'red' );
  rect( -185, -70, 30, 20, 03 );

  //front fender
  fill( 'grey' );
  rect( 275, -40 , 31, 30, 05 );

  //rear fender
  fill( 'grey' );
  rect( -200 , -40 , 31, 30, 05 );


  push();
  //back/left tire
  translate( -70, 0 , 0 );
  fill( 'rgb(40, 40, 40)');
  rotate( radians(wheel_angle) );
  ellipse( 0, 0, 84 , 76 ); // (pos left/right, pos up/down, width, height)
  wheel_angle = wheel_angle + 60;
  pop();

  //hubcap
  fill( 'grey');
  ellipse( -70, 0, 44 , 38 );

  push();
  //front/right tire
  translate( 226, 0 , 0 );
  fill( 'rgb(40, 40, 40)');
  rotate( radians(wheel_angle) );
  ellipse( 0, 0, 84 , 78 ); // (pos left/right, pos up/down, width, height)
  wheel_angle = wheel_angle + 60;
  pop();

  //hubcap
  fill( 'grey');
  ellipse( 226, 0, 44 , 40 );

  pop();
  pop();

}
