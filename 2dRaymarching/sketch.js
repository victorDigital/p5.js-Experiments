var mouseVector;
var obstacles = [];
var originRoots;
var isHit = false;

function setup() {
  createCanvas(600,600);
  frameRate(144);
  for(var i = 0; i < 10; i++) {
    let o = new obstacle(random(width),random(height),random(100))
    obstacles.push(o);
    
  }
}

function draw() {
  background(23);
  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].drawObstacles(i);
  }
  mouseVector = createVector(mouseX, mouseY);
  rayAngle = createVector(0,-1);
  raymarchingUpdate(mouseVector, rayAngle);
  for(var i = 0 ; i<50 || false; i++) {
    raymarchingUpdate(originRoots, rayAngle);
  }
  
}

function raymarchingUpdate(pos, ang) {
  var lowestFoundSoFar = 10000000, currentAnswer = 0;
  for(var i = 0; i < obstacles.length; i++) {
    currentAnswer = dist(obstacles[i].x, obstacles[i].y, pos.x, pos.y)- obstacles[i].r;
    if(currentAnswer<lowestFoundSoFar) {
      lowestFoundSoFar = currentAnswer;
    }
  }
  print(lowestFoundSoFar);
  fill(255,10);
  stroke(255);
  strokeWeight(1);
  circle(pos.x, pos.y, lowestFoundSoFar*-2);
  originRoots = createVector((ang.x*lowestFoundSoFar)+pos.x, (ang.y*lowestFoundSoFar)+pos.y);
}

function isHit() {
  var lowestFoundSoFar = 10000000, currentAnswer = 0;
  for(var i = 0; i < obstacles.length; i++) {
    currentAnswer = dist(obstacles[i].x, obstacles[i].y, pos.x, pos.y)- obstacles[i].r;
    if(currentAnswer<lowestFoundSoFar) {
      lowestFoundSoFar = currentAnswer;
    }
  }
  if(lowestFoundSoFar < 1) {
    return true;
  }
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
