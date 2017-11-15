var numA = [ 10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10 ]; //array 1
var numB = [ -20, -30, -40, -50, -60, -70, -60, -50, -40, -30, -20 ]; //array 2

function setup(){ //setup
  createCanvas(windowWidth, windowHeight); //canvas
  frameRate( 5 );

}

function draw() { //draw
  background(random(255), random(255), random(255)); //background color
  martini(); //call function martini
  swirlA(); //call function 1
  swirlB(); //call function 2

} //end draw

function martini(){ //define function - martini

  push();
  fill('rgb(114, 254, 232)');
  triangle( 380, 375, 500, 495, 620, 375 );
  strokeWeight( 4 );
  line( 500, 495, 500, 565 );
  line(440,565,560,565);

  push();
  fill('brown');
  rect( 400, 568, 200, 100 );
  pop();

  push();
  strokeWeight(6);
  fill('white');
  rect( 420, 570, 160, 100) ;
  pop();

  push();
  noStroke();
  fill('rgba( 43, 55, 248, 0.3 )');
  triangle( 400, 395, 500, 495, 600, 395 );
  pop();

  pop();
}

function swirlA(){ //define function 1

  for (var i = 0; i < 10; i++) { //for loop
    translate( 0, numA[i] );
    stroke('black'); //outline color
    fill('rgba( 43, 255, 48, 0.3 )'); //fill color
    ellipse(i * 100 + 100, 200, numA[i] / 1.2, numA[i]); //shape with parameters
    fill('rgba( 243, 55, 48, 0.8 )'); //fill color
    rect(i * 100 + 100, 200, numA[i] / 4, numA[i] / 4, 5);

    push();
    strokeWeight(random(2)); //dancing outline
    line(i * 100 + 100, 160, i * 100 + 100, 240);
    pop();

} //end for loop

} //end swirl

function swirlB(){ //define function 2

  for (var i = 0; i < 10; i++) { //for loop
    translate( 0, numB[i] );
    stroke('black'); //outline color
    fill('rgba( 43, 255, 48, 0.3 )'); //fill color
    ellipse(i * 100 + 100, 200, numB[i] / 1.2, numB[i]); //shape with parameters
    fill('rgba( 243, 55, 48, 0.8 )'); //fill color
    rect(i * 100 + 100, 200, numA[i] / 4, numA[i] / 4, 5);

    push();
    strokeWeight(random(2)); //dancing outline
    line(i * 100 + 100, 160, i * 100 + 100, 240);
    pop();

} //end for loop

} //end swirl
