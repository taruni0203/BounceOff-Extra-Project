var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200,200,80,30);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(keyDown("left")){
    movingRect.velocityX = -2;
    movingRect.velocityY = 0;
  }

  if(keyDown("right")){
    movingRect.velocityX = 2;
    movingRect.velocityY = 0;
  }

  if(keyDown("up")){
    movingRect.velocityX = 0;
    movingRect.velocityY = -2;
  }

  if(keyDown("down")){
    movingRect.velocityX = 0;
    movingRect.velocityY = 2;
  }

  movingRect.debug = true;
  fixedRect.debug = true;

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityX = -(movingRect.velocityX);
      movingRect.velocityY = -(movingRect.velocityY);

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}