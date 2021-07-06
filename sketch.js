var sleep;
var brush;
var gym;
var bath;
var eat;
var drink
var move;

var astronaut, astronaut_sleeping, astronaut_bathing, astronaut_exercising, astronaut_eating, astronaut_moving;

function preload() {

  insideRocketImg = loadImage("iss.png");
  astronaut_sleeping = loadAnimation("sleep.png");
  astronaut_bathing = loadAnimation("bath1.png","bath2.png");
  astronaut_brushing = loadAnimation("brush.png");
  astronaut_exercising = loadAnimation("gym1.png", "gym2.png");
  astronaut_eating = loadAnimation("eat1.png", "eat2.png"); 
  astronaut_moving = loadAnimation("gym11.png", "gym12.png");
}
function setup() {
  createCanvas(800,400);
  insideRocket = createSprite(200, 200, 50, 50);
  insideRocket.scale = 0.1;
  insideRocket.addImage(insideRocketImg);

  astronaut = createSprite(200,200);
  astronaut.addAnimation("sleeping", astronaut_sleeping);
  astronaut.scale = 0.1;
} 

function draw() {
  background("white"); 
  
  if (keyDown("up")){
    astronaut.addAnimation("brushing", astronaut_brushing);
    astronaut.changeAnimation("brushing");
  }

  if (keyDown("down")){
    astronaut.addAnimation("exercising", astronaut_exercising);
    astronaut.changeAnimation("exercising");
  }

  if (keyDown("left")){
    astronaut.addAnimation("eating", astronaut_eating);
    astronaut.changeAnimation("eating");
  }

  if (keyDown("right")){
    astronaut.addAnimation("bathing", astronaut_bathing);
    astronaut.changeAnimation("bathing");
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving", astronaut_moving);
    astronaut.changeAnimation("moving");
  }  
  drawSprites();
} 