

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background( 'black' );
}


function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


    stroke( ball.x / 4, ball.y / 4, -ball.y, ball.y / 2.98 );
    noFill();
    ellipse(ball.x, ball.y, ball.width, ball.width);

    push();
    translate ( -200, 0 );
    stroke( ball.x / 4, ball.y / 4, -ball.y, ball.y / 2.98 );
    noFill();
    ellipse(ball.x / 0.5, ball.y / 0.5, ball.width, ball.width);
    pop();

    push();
    translate( 100, 0 );
    stroke( ball.x / 4, ball.y / 4, -ball.y, ball.y / 2.98 );
    noFill();
    ellipse(ball.x * 1.25, ball.y * 1.25, ball.width * 1.25, ball.width * 1.25 );
    pop();

    push();
    translate( 200, 0);
    stroke( ball.x / 4, ball.y / 4, -ball.y, ball.y / 2.98 );
    noFill();
    ellipse(ball.x / 0.5, ball.y / 0.5, ball.width, ball.width );
    pop();

    push();
    translate( -100,0 );
    stroke( ball.x / 4, ball.y / 4, -ball.y, ball.y / 2.98 );
    noFill();
    ellipse(ball.x * 1.5, ball.y * 1.5, ball.width * 1.5, ball.width * 1.5 );
    pop();


}


function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
