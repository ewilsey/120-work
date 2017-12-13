///////////////////////////////////////////////////
// Object Class
///////////////////////////////////////////////////
class Object {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() { //object movement
        this.x = this.x + random(-13, 13);
        this.y = this.y + random(-13, 13);
    }

    show() { //object
        frameRate(13);
        stroke(80,random(255),80);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);


    }
}
