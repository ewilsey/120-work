let butterfly = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
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

class Butterfly {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(50);
        strokeWeight(1);
        fill(random(255),random(255),random(255));
        ellipse(this.x, this.y, this.r-10, this.r+10);
        ellipse(this.x+20, this.y-15, this.r-7, this.r-5); //top right
        ellipse(this.x-20, this.y+25, this.r-10, this.r+10); //bottom left
        ellipse(this.x+20, this.y+25, this.r-10, this.r+10); //bottom right
        ellipse(this.x-20, this.y-15, this.r-7, this.r-5); //top left

    }
}
