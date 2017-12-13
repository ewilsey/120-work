let object  = [];

function  setup() {
  createCanvas( windowWidth - 10,  windowHeight - 10 ); //canvas
  textSize(35);
  for(let i = 0; i < 22; i ++) {
  let x = random(width);
  let y = random(height);
  let r = random(10,50);
  let o = new Object(x,y,r);
  object.push(o);
  }
}

function mousePressed(){
  for (let i = 0; i < object.length; i++) {
       object[i].clicked(mouseX,mouseY);
    }
}

function  draw(){
  background('black'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
   }
}
