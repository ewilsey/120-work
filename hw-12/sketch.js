let object = [];
let object2 =[];

function  setup() {
  createCanvas( windowWidth - 10,  windowHeight - 10 ); //canvas
  textSize(35);
  for(let i = 0; i < 1; i ++) {
  let x = random(width);
  let y = random(height);
  let r = random(10,50);
  let o = new Object(x,y,r);
  let o2 = new Object2(x,y,r);
  object.push(o);
  object2.push(o2);
  }
}

function mousePressed(){
  for (let i = 0; i < object.length; i++) {
       object[i].clicked(mouseX,mouseY);
    }
    for (let i = 0; i < object2.length; i++) {
         object2[i].clicked(mouseX,mouseY);
      }
}

function  draw(){
  background('black'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
     }
  for (let i = 0; i < object2.length; i++) {
        object2[i].move();
        object2[i].show();
   }
}
