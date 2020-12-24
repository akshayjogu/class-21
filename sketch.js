var fixedRect, movingRect, obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  obj1 = createSprite(100,100,80,30);
  obj1.shapeColor = "blue";
  obj1.velocityY=3;
  obj2 = createSprite(100,400,80,30);
  obj2.shapeColor = "pink";

  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  bounceOff(obj1,obj2)

  drawSprites();
}