///////////////////////////////////////////////////
// Object Class
///////////////////////////////////////////////////
class Object {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    clicked(){
      let d = dist(mouseX,mouseY,this.x,this.y);
      text("Click!", mouseX, mouseY);
    }

    move() { //object movement
        this.x = this.x + random(-13, 13);
        this.y = this.y + random(-13, 13);
    }

    show() { //object
        frameRate(1);
        stroke(80,random(255),80);
        strokeWeight(4 - random(-3,3));
        fill('rgb(235, 217, 155)');
        rect(this.x, this.y, this.r + random(-100, 10), this.r + random(-100, 10));

    }

}
