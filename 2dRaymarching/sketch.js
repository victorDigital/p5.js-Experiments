var mouseVector;
var obstacles = [];
var originRoot;
var points = [];
var isHit = false;
var a = 0;
var ang;
var test;

function setup() {
  createCanvas(windowWidth-100,windowHeight-100);
  ang = createVector();
  frameRate(144);
  for(var i = 0; i < 10; i++) {
    let o = new obstacle(random(width),random(height),random(100))
    obstacles.push(o);
    
  }
  let o = new obstacle(windowWidth/2,-1000000,1000000)
  obstacles.push(o);
  o = new obstacle(windowWidth/2,1000000,1000000-windowHeight)
  obstacles.push(o);
  o = new obstacle(-1000000,windowHeight/2,1000000)
  obstacles.push(o);
  o = new obstacle(1000000,windowHeight/2,1000000-windowWidth)
  obstacles.push(o);

  createP("use mouse to change origin")
}

function draw() {
  points = [];
  background(-10,100);
  for(var j = 0; j < 360 ; j+=1.5) {
    angleMode(DEGREES); 
    angleUpdate();
    for(var i = 0; i < obstacles.length; i++) {
      obstacles[i].drawObstacles(i);
    }
    mouseVector = createVector(mouseX, mouseY);
    rayAngle = createVector(0,-1);
    raymarchingUpdate(mouseVector, rayAngle);
    for(var i = 0 ; i<40 || isHit && i<40; i++) {
      raymarchingUpdate(originRoot, rayAngle);
    }
    if(isHit) {
      points.push(originRoot)
      stroke(0,255,0)
      strokeWeight(4)
      point(originRoot)
      strokeWeight(3)
    }
  }
  print(points.length)
  for(var i = 0 ; i < points.length-1; i++) {
    stroke(255)
    var distance = dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
    strokeWeight(5);
    stroke(0,255,0);
    if(distance > 40) {
      strokeWeight(1);
      stroke(255,0,0);
    }
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
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
  //circle(pos.x, pos.y, lowestFoundSoFar*-2);
  originRoot = createVector((ang.x*lowestFoundSoFar)+pos.x, (ang.y*lowestFoundSoFar)+pos.y);
  isHit=false;
  if(lowestFoundSoFar < 10) {
    isHit=true;
  }
}
function angleUpdate() {
  a+=1.5;
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
    //circle(obstacles[i].x, obstacles[i].y, obstacles[i].r*2 )
  }
}
