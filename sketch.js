var dig;

function preload() {
  dig=loadImage("Assets/Zombie2a.png");
}

function setup() {
  createCanvas(800,400);
  dig=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  if(keyIsDown(UP_ARROW)) {
    dig.y=dig.y-10
}
if(keyIsDown(DOWN_ARROW)) {
    dig.y=steve.y+10
}


  drawSprites();
}