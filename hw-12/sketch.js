let object  = [];

function  setup() {
  createCanvas( windowWidth,  windowHeight  ); //canvas
  let o = new Object(width/2, height/2, 10);
  object.push(o);
//  objectTimer();
}

function mousePressed(){

  text("Clicked!", mouseX, mouseY )
  //object.clicked();

}

function  draw(){
  background('white'); //background color
  for (let i = 0; i < object.length; i++) {
       object[i].move();
       object[i].show();
   }
}
// function objectTimer() {
//    let o = new Object(random(width), random(height), random(200)); //randomize
//     object.push(o);
//     setTimeout(objectTimer, random(8000)); //create new object every x-ms
// }
