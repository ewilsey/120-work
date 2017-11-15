var numA = [ 10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10 ]; //array
var numB = [ -20, -30, -40, -50, -60, -70, -60, -50, -40, -30, -20 ]; //array 2

function setup(){ //setup
  createCanvas(windowWidth, windowHeight); //canvas

}

function draw() { //draw
  background(5); //background color
  swirlA();
  swirlB();

} //end draw

function swirlA(){

  for (var i = 0; i < 10; i++) { //for loop
    translate(0, numA[i]);
    stroke('white'); //outline color
    noFill(); //fill color
    ellipse(i * 100 + 100, 200, numA[i], numA[i]); //shape with parameters

} //end for loop

} //end swirl

function swirlB(){

  for (var i = 0; i < 10; i++) { //for loop
    translate(0, numB[i]);
    stroke('white'); //outline color
    noFill(); //fill color
    ellipse(i * 100 + 100, 200, numB[i], numB[i]); //shape with parameters

} //end for loop

} //end swirl
