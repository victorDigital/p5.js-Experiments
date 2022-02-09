var obstacles = [];

function setup() {
  createCanvas(600,600);
  let o = new obstacle(300,300,100)
  obstacles.push(o);
}

function draw() {
  background(51);
  print(obstacles);
  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].drawObstacles();
  }
}
  

class obstacle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  drawObstacles() {
    noFill();
    stroke(255);
    circle(obstacles[i].x, obstacles[i].y, obstacles[i].r*2 )
  }
}