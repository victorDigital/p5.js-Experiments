
let mySlider;
let balls = [];
let safety = 0;
let maxSize = 50;

function setup() {
  createCanvas(400,400);
  mySlider = createSlider(0,100,0,1)
}

function draw() {
  console.log("hi");
  background(51)
  let val = mySlider.value();
  while(balls.length < val && safety < 20000) {
    let b = new ball(random(width), random(height), random(10,maxSize));
    if(!isOverlapping(b)) {
      balls.push(b);
    } else {
      safety++;
    }
    if(safety > 500) {
      maxSize = 15;
    }
  }
  for(let i = 0 ; i < val; i++) {
    balls[i].drawBall();
  }
}

function isOverlapping (b) {
  for(let i = 0; i < balls.length; i++) {
    let otherX = balls[i].x;
    let otherY = balls[i].y;
    let otherR = balls[i].r;
    if(dist(b.x, b.y, otherX, otherY)-(b.r+otherR) < 0) {
      return true;
    }
  }
  return false;
}

class ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  drawBall = function() {
    fill(255, 255, 0, 100)
    noStroke();
    circle(this.x, this.y, this.r*2)
  }
}