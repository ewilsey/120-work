///////////////////////////////////////////////////
// Object2 Class
///////////////////////////////////////////////////
class Object2 {
    constructor(x, y, r) {
        this.x2 = x;
        this.y2 = y;
        this.r2 = r;
        this.color = 'white';
        this.color2 = 'rgba(0, 0, 0, 0)';
        this.color3 = 'rgba(0, 0, 0, 0)';
        this.color4 = 'rgba(0, 0, 0, 0)';
    }

    clicked(x,y){
      let d = dist(x, y, this.x2, this.y2);
      if (d < this.r2) {
            this.color = 'rgba(0, 0, 0, 0)';
            this.color2 = 'white';
            this.color3 = 'yellow';
            this.color4 = 'purple';
            fill(this.color3).stroke(this.color4).strokeWeight(2);
            text("100",this.x2,this.y2);
      }

    }

    move() { //object2 movement
        this.x2 = this.x2 + random(-13, 13);
        this.y2 = this.y2 + random(-13, 13);
    }

    show() { //object2

        push();
        noStroke();
        fill(this.color2);
        ellipse(this.x2/2 ,this.y2/2,this.r2*2,this.r2*2);
        push();
        fill(this.color3).stroke(this.color4).strokeWeight(2);
        text("100",this.x2/2,this.y2/2);
        pop();
        pop();

        frameRate(5);
        noStroke();
        fill(this.color);
        rect(this.x2, this.y2, this.r2, this.r2 + random(-100, 10));


    }

}
