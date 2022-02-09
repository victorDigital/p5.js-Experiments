var obstacles = [];

function setup() {
  createCanvas(600,600);
  for(var i = 0; i < 5; i++) {
    let o = new obstacle(random(width),random(height),random(100))
    obstacles.push(o);
  }
}

function draw() {
  background(23);
  print(obstacles);
  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].drawObstacles(i);
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

class raymarching {
  constructor(pos,ang) {
    this.pos = 
  }
}