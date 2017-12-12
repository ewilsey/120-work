let object  = [];

function  setup() {
  createCanvas( windowWidth,  windowHeight  ); //canvas
  let o = new Object(width/2, height/2, 10);
  object.push(o);
  objectTimer();
}

function  draw(){
  background('white'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
   }
}

function objectTimer() {
    let o = new Object(random(width), random(height), random(200));
    object.push(o);
    setTimeout(objectTimer, random(2000));
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
        frameRate(13);
        stroke(80,random(255),80);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);


    }
}
