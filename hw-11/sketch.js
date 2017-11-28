let butterfly = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let f = new Butterfly(width/2, height/2, 22);
    butterfly.push(f);
}

function mouseDragged() {
    let r = random(10, 50);
    let f = new Butterfly(mouseX, mouseY, r);
    butterfly.push(f);
}

function draw() {
    background(30,130,30,30);
    for (let i = 0; i < butterfly.length; i++) {
        butterfly[i].move();
        butterfly[i].show();
    }
}
/////////////////////////////////////////
//      BUTTERFLY
/////////////////////////////////////////
class Butterfly {
    //Build constructor method//
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    //Flight of the butterfly//
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    //Butterfly image//
    show() {
        noStroke();
        fill(random(255),random(255),random(255));

        //body
        push();
        fill('black');
        ellipse(this.x, this.y, this.r-35, this.r+210);
        pop();

        //Wings//
        push();  //top right
        arc(this.x+10, this.y-85, this.r+199, this.r+165, 0, HALF_PI);
        pop();

        push();  //bottom left
        arc(this.x-10, this.y+45, this.r+145, this.r+140, -PI, -HALF_PI);
        pop();

        push(); //bottom right
        arc(this.x+10, this.y+45, this.r+145, this.r+140, -HALF_PI, 0);

        pop();

        push(); //top left
        arc(this.x-10, this.y-85, this.r+199, this.r+165, HALF_PI, PI);

        pop();
    }
}
