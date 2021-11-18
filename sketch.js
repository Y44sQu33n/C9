var box

function setup() {
  createCanvas(700,400);
  box = createSprite(100,100,45,45);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)) {
    box.x += 1;
  }

  if(keyIsDown(LEFT_ARROW)) {
    box.x -= 1;
  }

  if(keyIsDown(UP_ARROW)) {
    box.y -= 1;
  }

  if(keyIsDown(DOWN_ARROW)) {
    box.y += 1;
  }

  drawSprites();
}




