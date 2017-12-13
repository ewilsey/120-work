let object = [];
let object2 =[];

function  setup() {
  createCanvas( windowWidth - 10,  windowHeight - 10 ); //canvas
  textSize(35);
  for(let i = 0; i < 2; i ++) {
  let x = random(width);
  let y = random(height);
  let r = 50;
  let x2 = random(width);
  let y2 = random(height);
  let r2 = 50;
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

   let d = dist(this.x, this.y, this.x2, this.y2); //this function not working not sure why
   if (d < this.r + this.r2) { //do I need to change these where ? OR where?
     this.color = 'red';
     this.color2 = 'blue';
     this.color3 = 'green';
     this.color4 = 'yellow';

   }
}
