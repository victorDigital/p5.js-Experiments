
var pos, acc;
var myFont;
var sideA;
var ang = 0;
var angs = 0;
var burnedplaces = [];
let smokePar = [];
let grassBlades = [];
var motorRunning = false;
var gameOver = false;
let camera;
var zoomLevel = 700;
var fade = 255
var statFade = 0;
var isOffGround = false;


function preload() {
  myFont = loadFont("ARCADECLASSIC.TTF");
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  camera = createCamera();
  pos = createVector(width/2,height-150);
  acc = createVector(0,0)
  setAttributes('antialias', true);
  angleMode(DEGREES);
  frameRate(60);
  textFont(myFont)
  for(var i = 0 ; i < width ; i += random(1,5)) {
    let g = new grass(i,random(-20,20))
    grassBlades.push(g);
  }
}

function draw() {
  fade--
  camera.lookAt(pos.x, pos.y, 0);
  camera.setPosition(pos.x, pos.y,zoomLevel);
  background(39, 196, 217);
  drawPlayer();
  updatePlayer();
  drawWorld();
  drawBurnedPlaces();
  drawLandingPad()
  fill(0,fade)
  noStroke()
  textSize(30)
  text("rocket   acrobatics", pos.x+50,pos.y-110)
  text("use   arrow   keys" , pos.x+50 ,pos.y-80)
  text("scroll   with   scrollwheel" , pos.x+50 ,pos.y-50)
  text("have   fun !", pos.x+50,pos.y-20)
  translate(0,0,10)
  fill(0,statFade)
  print(isOffGround)
  text("altitude   " + round((pos.y -height)/-1-149), pos.x+50,pos.y-110)
  text("angle   " + round(ang), pos.x+50 ,pos.y-80)
  text("speed   " + abs(round(acc.mag())), pos.x+50,pos.y-50)
  translate(0,0,-10)
}

function drawWorld() {
  fill(52, 173, 76)
  noStroke();
  rect((width*500)/-1, height-70, width*1000, height*1000)
  for(var i = 0 ; i < grassBlades.length ; i++) {
    grassBlades[i].drawGrass();
  }
}

function drawPlayer() {
  stroke(51)
  strokeWeight(10);
  translate(pos.x,pos.y)
  rotate(ang)
  line(0,-50,0,50)
  rotate(-ang)
  translate(-pos.x,-pos.y)
  for(var i = 0; i < smokePar.length; i++) {
    smokePar[i].drawSmoke()
  }
  for(var i = 0 ; i < smokePar.length ; i++) {
    if(smokePar[i].t < 0) {
      smokePar.splice(i,1);
    }
  }
}

function updatePlayer() {
  isOffGround = false;
  if(ang < 0) {
    ang = 360
  }
  if(ang > 360) {
    ang = 0
  }
  if(angs > 0) {
    angs -= 0.04
  }
  if(angs < 0) {
    angs += 0.04
  }
  if(angs > 0) {
    angs -= 0.001
  }
  if(angs < 0) {
    angs += 0.001
  }
  if(height < (pos.y)/-1 ) {
    isOffGround = true;
  }
  if(isOffGround && statFade < 255) {
    statFade += 5
  }
  if(!isOffGround && statFade > 0) {
    statFade -= 5
  }
  //angs = round(angs)
  acc.y += 0.05;
  pos.y += acc.y
  pos.x += acc.x
  ang -= angs;
  if(int(pos.y) > height - 100 - (cos(ang)*50) && (pos.x > width/2-100 && pos.x < width/2+100) ) {
    pos.set(pos.x,height - 100 - (cos(ang)*50))
    acc.set(0,0)
    angs = 0;
  }
  if(int(pos.y) > height - 70 - (cos(ang)*50) && (pos.x < width/2-100 || pos.x > width/2+100) ) {
    pos.set(pos.x,height - 70 - (cos(ang)*50))
    acc.set(0,0)
    angs = 0;
  }
  motorRunning = false;
  
  if(keyIsDown(UP_ARROW) && !gameOver) {
    
    motorRunning = true;
    sideA = dist(pos.x,pos.y,pos.x,height-65)/tan(ang+90);
    var sideC = dist(pos.x,pos.y,pos.x + sideA, height -65)
    let s = new Smoke(pos.x - (sin(ang)*50),pos.y + (cos(ang)*50), random(2, 10),ang,50);
    smokePar.push(s);
    acc.sub((sin(ang) / 8 ) / -1,(cos(ang) / 8))
    stroke(30,map(sideC,340,50,0,255));
    var burned = {
      x: pos.x + sideA,
      y: height - 65,
      a: map(sideC,340,50,0,170)
    }
    burnedplaces.push(burned)

    translate(pos.x,pos.y);
    rotate(ang);
    stroke(255, 150, 0);
    if(keyIsDown(LEFT_ARROW)) {
      line(0,50, -20,90);
    } else if(keyIsDown(RIGHT_ARROW)) {
      line(0,50, 20,90);
    } else {
      line(0,50, 0,100);
    }
    stroke(0,0,0);
    rotate(-ang);
    translate(-pos.x,-pos.y);
    //line(pos.x + sideA -10, height -65,pos.x + sideA +10, height -65)
  }
  if(keyIsDown(LEFT_ARROW) && !gameOver) {
    angs+= 0.1;
    translate(pos.x,pos.y);
    rotate(ang);
    stroke(170);
    line(0,-40,10,-40)
    rotate(-ang);
    translate(-pos.x,-pos.y);
  }
  if(keyIsDown(RIGHT_ARROW) && !gameOver) {
    angs-= 0.1;
    translate(pos.x,pos.y);
    rotate(ang);
    stroke(170);
    line(0,-40,-10,-40)
    rotate(-ang);
    translate(-pos.x,-pos.y);
  }
  if(map(sideC,340,50,0,255) > 10) {
    let s = new Smoke(pos.x + sideA,height - 65, random(7, 30),random(90,270),50);
    smokePar.push(s);
    let s2 = new Smoke(pos.x + sideA,height - 65, random(10, 40),random(-90,90),200);
    smokePar.push(s2);
  }
}

function drawBurnedPlaces() {
  for (var i = 0 ; i < burnedplaces.length ; i++) {
    stroke(51,burnedplaces[i].a)
    strokeWeight(10);
    line(burnedplaces[i].x-30,burnedplaces[i].y,burnedplaces[i].x+30,burnedplaces[i].y)
    burnedplaces[i].a--
    if(burnedplaces[i].a < 0) {
      burnedplaces.splice(i,1)
    } 
  } 
} 

function drawLandingPad() {
  rectMode(CENTER);
  fill(100)
  noStroke()
  translate(0, 0, 1)
  rect(width/2,height-70,200,50)
  translate(0, 0, -1)
  rectMode(CORNER);
}

function mouseWheel(event) {
  zoomLevel += event.delta * zoomLevel /1000;
  print(zoomLevel)
  if (zoomLevel <= 116) {
    zoomLevel = 116;
  }
  if (zoomLevel >= 10000) {
    zoomLevel = 10000;
  }
}

class Smoke {
  constructor(x,y,r,a,t) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.a = a;
    this.t = t;
  }
  drawSmoke() {
    this.r = this.r + 3
    this.t = this.t - 2
    this.x = this.x + sin(this.a) / -1  * 7
    this.y = this.y + cos(this.a) * 7
    noStroke();
    fill(120,this.t);
    translate(0, 0, -2)
    circle(this.x, this.y, this.r);
    translate(0, 0, 2)
  }
}

class grass {
  constructor(x,ra) {
    this.x = x;
    this.ra = ra;
    this.px = pos.x;
    this.pd = dist(pos.x,pos.y,this.x,height-70)
    this.a;
    this.ca = -90;
    this.c = 0;
  }
  drawGrass() {
    this.px = pos.x;
    this.pd = dist(pos.x,pos.y,this.x,height-70)
    stroke(52, 173, 76)
    strokeWeight(2);
    this.a = -90;
    //this.ca = -90;
    if(this.pd > 200) { this.pd = 200}
    if(this.c > 300) { this.c = 300}
    
    if (this.px < this.x && motorRunning == true) { 
      this.a = map(this.pd, 200, 10 ,-90,180) 
    }
    if (this.px > this.x && motorRunning == true) { 
      this.a = map(this.pd, 200, 10 ,-90,-360) 
    }
    //this.a = 0//+= this.a / 10 
    var off = 0;
    if(motorRunning ) {
      off = -this.pd + 200
      if(dist(pos.x + sideA,0,this.x,0)< 100 && this.pd < 200) {
        this.c += 30;
      }
    }
    this.c-=2;
    if(this.c <= 0) {this.c=0;}
    if(this.a +this.ra >= this.ca) {this.ca++;}
    if(this.a +this.ra <= this.ca) {this.ca--;}
    
    if(this.a >= this.ca) {this.ca+= randomGaussian(off / 100, off / 7)}
    if(this.a <= this.ca) {this.ca-= randomGaussian(off / 100, off / 7)}
    var xoff = 10 * cos(this.ca);
    var yoff = 10 * sin(this.ca);
    var r = map(this.c, 0, 300 , 52, 51)
    var g = map(this.c, 0, 300 , 173, 51)
    var b = map(this.c, 0, 300 , 76, 51)
    stroke(r,g,b)
    line(this.x,height-70,-1,this.x+xoff,height-80+yoff,-1);
  }
}