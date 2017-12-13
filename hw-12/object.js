///////////////////////////////////////////////////
// Object Class
///////////////////////////////////////////////////
class Object {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = 'yellow'
    }

    clicked(x,y){
      let d = dist(x, y, this.x, this.y);
      if (d < this.r) {
            this.color = 'blue'
            text("FUCK",this.x,this.y);
      }

    }

    move() { //object movement
        this.x = this.x + random(-13, 13);
        this.y = this.y + random(-13, 13);
    }

    show() { //object
        frameRate(1);
        stroke(80,random(255),80);
        strokeWeight(4 - random(-3,3));
        fill(this.color);
        rect(this.x, this.y, this.r *2, this.r + random(-100, 10));

    }

}
