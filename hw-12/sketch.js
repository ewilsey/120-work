let object  = [];

function  setup() {
  createCanvas( windowWidth,  windowHeight  ); //canvas
  let o = new Object(width/2, height/2, 10);
  object.push(o);
}

function  draw(){
  background('white'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
   }
}

///////////////////////////////////////////////////
// Object Class
///////////////////////////////////////////////////
class Object {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-13, 13);
        this.y = this.y + random(-13, 13);
    }

    show() {
        stroke(0,20,20);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}
