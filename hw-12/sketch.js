let object  = [];

function  setup() {
  createCanvas( windowWidth - 10,  windowHeight - 10 ); //canvas
  for(let i = 0; i < 5; i ++) {
  let x = random(width);
  let y = random(height);
  let r = random(10,50)
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
  background('blue'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
   }
}
