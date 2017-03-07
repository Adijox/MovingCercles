var x;
var y;
var x2;
var y2;
var speed;
var gameOver = 0;
var rmone;
var rmt;
var rmt;
var rmx;
var rmy;
var done = 0;
var vect;
var UNO = 0;
var score = 0;
//var music;
var r = 30;
var realr;
function setup () {
    //music = loadSong('MovingCircles.mp3');
  // song.play();
   x = 50;
    y = 50;
    speed = 5;
    createCanvas(1600, 794);
    rmx = 50;
    rmy = 80;
    
}
function draw() {
   
    
    vect = createVector(x-rmx, y-rmy);
    
        background(51);
    if (keyIsDown(UP_ARROW)) {
        y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += speed;
    }
    fill(124, 217, 156);
    noStroke();
    ellipse(x, y, score*2+r, score*2+r);
    realr = score*2 + r;
    if(done == 0) {
       Obstacle();
        console.log("crée");
        done = 1;
    }
    fill(rmone, rmd, rmt);
   rect(rmx, rmy, 30, 30);
    
    if (x >= width || x <= 0 || y >= height || y <= 0) {
        gameOver = 1;
        
    }
    magn = vect.mag();
    if (UNO === 0) {
        magn = 200;
        UNO = 1;
    }
    if (magn < realr + 10) {
        Obstacle();
        console.log("Colision");
        score+=1;
        speed+=1;
        

    }
    /*do {
        obstacle = new Obstacle(rmx, rmy, rmone,rmt, rmt);
        done = 0;
        
    }
    while(done === 1) {
                obstacle = new Obstacle(rmx, rmy, rmone,rmt, rmt);
        console.log("step2");
    }*/
     if (keyIsDown(ENTER)) {
    stroke(0, 60, 255);
    strokeWeight(15);
    line(mouseX, mouseY, x, y);
     }
    if (x== rmx+30 || x==rmx-30 || y == rmy+300 || y == rmy-30) {
        gameOver = 1;
    }
    if (gameOver === 1) {
        createCanvas(2000, 200);
    }
    console.log(magn);
    console.log(realr);
}

function Obstacle () {
      rmone = random(1, 255);
    rmd = random(1, 255);
    rmt = random(1, 255);
    rmx = random(30, 1550);
    rmy = random(30, 760);


  }
