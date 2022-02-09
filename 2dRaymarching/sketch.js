var mouseVector;
var obstacles = [];
var originRoot;
var isHit = false;
var a = 0;
var ang;

function setup() {
  createCanvas(600,600);
  ang = createVector();
  frameRate(144);
  for(var i = 0; i < 10; i++) {
    let o = new obstacle(random(width),random(height),random(100))
    obstacles.push(o);
    
  }
  createP("use mouse to change origin")
  createP("use arrow keys to change angle of ray")
}

function draw() {
  background(23);
  angleUpdate();
  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].drawObstacles(i);
  }
  mouseVector = createVector(mouseX, mouseY);
  rayAngle = createVector(0,-1);
  raymarchingUpdate(mouseVector, rayAngle);
  for(var i = 0 ; i<50 || isHit && i<50; i++) {
    raymarchingUpdate(originRoot, rayAngle);
  }
  if(isHit) {
    stroke(0,255,0)
    strokeWeight(15)
    point(originRoot)
    strokeWeight(3)
    line(mouseVector.x,mouseVector.y,originRoot.x,originRoot.y)
  }
  
}

function raymarchingUpdate(pos) {
  var lowestFoundSoFar = 100000, currentAnswer = 0;
  for(var i = 0; i < obstacles.length; i++) {
    currentAnswer = dist(obstacles[i].x, obstacles[i].y, pos.x, pos.y)- obstacles[i].r;
    if(currentAnswer<lowestFoundSoFar) {
      lowestFoundSoFar = currentAnswer;
    }
    if(lowestFoundSoFar > 0) {
      isHit=true;
    }
  }
  fill(255,10);
  stroke(255, 200);
  strokeWeight(1);
  circle(pos.x, pos.y, lowestFoundSoFar*-2);
  originRoot = createVector((ang.x*lowestFoundSoFar)+pos.x, (ang.y*lowestFoundSoFar)+pos.y);
  isHit=false;
  if(lowestFoundSoFar < 10) {
    isHit=true;
  }
}
function angleUpdate() {
  if(keyIsDown(LEFT_ARROW)) {
    a-=1/100;
  } 
  
  if(keyIsDown(RIGHT_ARROW)) {
    a+=1/100;
  }
  ang.x = cos(a);
  ang.y = sin(a);
}

class obstacle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  drawObstacles(i) {
    noFill();
    stroke(255);
    strokeWeight(3);
    circle(obstacles[i].x, obstacles[i].y, obstacles[i].r*2 )
  }
}
