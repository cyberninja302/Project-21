var thickness,wall;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,400);
 speed=random(223 , 321);
 weight=random(30 , 52);
 bullet=createSprite(50,200,50,50);
 bullet.velocityX=speed;
 wall=createSprite(1100,200,thickness,height/2)
 wall.shapeColor=color(80,80,80)
 thickness=random(22 , 83)
}


function draw() {
  background(0,0,0); 
 

drawSprites();

}
  
function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.X +bullet.widht;
wallLeftEdge=wall.X;
if (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;


if(hasCollided(bullet, wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage>10)
{
wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
wall.shapeColor=color(0,255,0);

}

}
}








