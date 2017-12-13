///////////////////////////////////////////////////
// Object2 Class
///////////////////////////////////////////////////
class Object2 {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = 'white';
        this.color2 = 'rgba(0, 0, 0, 0)';
        this.color3 = 'rgba(0, 0, 0, 0)';
        this.color4 = 'rgba(0, 0, 0, 0)';
    }

    clicked(x,y){
      let d = dist(x, y, this.x, this.y);
      if (d < this.r) {
            this.color = 'rgba(0, 0, 0, 0)';
            this.color2 = 'white';
            this.color3 = 'yellow';
            this.color4 = 'purple';
            fill(this.color3).stroke(this.color4).strokeWeight(2);
            text("100",this.x,this.y);
      }

    }

    move() { //object2 movement
        this.x = this.x + random(-13, 13);
        this.y = this.y + random(-13, 13);
    }

    show() { //object2

        push();
        noStroke();
        fill(this.color2);
        ellipse(this.x/2 ,this.y/2,this.r*2,this.r*2);
        push();
        fill(this.color3).stroke(this.color4).strokeWeight(2);
        text("100",this.x/2,this.y/2);
        pop();
        pop();

        frameRate(5);
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.r, this.r + random(-100, 10));


    }

}
