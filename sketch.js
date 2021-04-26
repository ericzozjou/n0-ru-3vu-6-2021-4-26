let x = 0 ;
function setup() {
  createCanvas(4000, 4000);
}

function draw() {
 // background(220);
  fill(mouseX,mouseY,30)
  circle(mouseX,mouseY, 20+5*sin(x))
  let a = createVector(10, 10);
triangle(mouseX, mouseY, 58, 20, 20, 75);
  x=x+100;
}