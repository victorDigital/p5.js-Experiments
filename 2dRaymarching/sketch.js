var mouseVector;
var obstacles = [];
var originRoot;
var points = [];
var isHit = false;
var a = 0;
let aMove = 0;
var ang;
var test;
let fov = 90;
let amountOfScanLines;
let scanLinesSize;
function setup() {
  amountOfScanLines = fov
  scanLinesSize = amountOfScanLines / fov;
  print(scanLinesSize)
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

  createP("use keyboard to move")
}

function draw() {
  points = [];
  background(-10);
  for(var j = -fov / 2; j < fov/2 ; j+=0.3) {
    angleMode(DEGREES); 
    angleUpdate(j);
    for(var i = 0; i < obstacles.length; i++) {
    }
    mouseVector = createVector(mouseX, mouseY);
    rayAngle = createVector(0,-1);
    raymarchingUpdate(mouseVector, rayAngle);
    for(var i = 0 ; i<40 || isHit && i<40; i++) {
      raymarchingUpdate(originRoot, rayAngle);
    }
    if(isHit) {
      points.push(originRoot)
    }
  }
  for(let i = 0; i < points.length; i++) {
    let curBar = points[i];
    let distToCam = map(dist(mouseVector.x,mouseVector.y, curBar.x,curBar.y),0,2500,255,0);
    stroke(distToCam);
    strokeWeight(4)
    line(4*i,0+ -distToCam +255,4*i, height+distToCam -255)
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
  originRoot = createVector((ang.x*lowestFoundSoFar)+pos.x, (ang.y*lowestFoundSoFar)+pos.y);
  isHit=false;
  if(lowestFoundSoFar < 10) {
    isHit=true;
  }
}
function angleUpdate(p) {
  a=p;

  if(keyIsDown(LEFT_ARROW)) {
    aMove-=1/300;
  } 
  
  if(keyIsDown(RIGHT_ARROW)) {
    aMove+=1/300;
  }
  a += aMove;
  ang.x = cos(a);
  ang.y = sin(a);
}

class obstacle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}
