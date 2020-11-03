var car,wall
var speed,weight
var bulletRightEdge,wallRightEdge;


function setup() {
  createCanvas(1600,400);
   car = createSprite (50,100,50,50)
  car.shapeColor='brown';
   wall = createSprite (1000,100,height/2);
   speed = random (40,90)
  weight = random (400,1500);
  car.velocityX = speed;
  

  function hascollided (Lbullet,Lwall){

    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x
    if (bulletRightEdge>= wallRightEdge){
    
      return true
    }
    return false
    
    
    }
    





}

function draw() {
  background('black');
  
 


if (car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car . x < wall. width/2 + car.width/2){


car .velocityX = 0;
var deformation  = 0.5 * speed * speed/22509;


if (deformation > 180){
  car.shapeColor = color (255, 0, 0)
}


if (deformation > 180 && deformation>100){

car . shapeColor = color (230, 230, 0);
}

if (deformation < 100)
{

  car. shapeColor = color (0, 255, 0)
}


  }






else {
car. shapeColor = "brown"
wall.shapeColor = "white"

}







  drawSprites();
}