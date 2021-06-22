var movingRect, fixedRect;


function setup() {
  createCanvas(2000,800);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log("A : " + (movingRect.width/2 + fixedRect.width/2));
  console.log("B :" + (movingRect.x - fixedRect.x));

  if(movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x &&
  movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x  &&
  movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y &&
  movingRect.height/2 + fixedRect.height/2 > fixedRect.y- movingRect.y){
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
