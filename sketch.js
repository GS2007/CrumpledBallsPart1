
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,d1,d2,d3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 500);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(700,300,3000,30)
  d1=new Dustbin(1000,280,140,20)
  d2=new Dustbin(920,225,20,130)
 d3=new Dustbin(1060,225,20,130)
ball=new Ball(200,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  d1.display();
  d2.display();
  d3.display();
  ball.display();
keyPressed();
console.log(ball.body.position.y)



if(ball.x>=d1.x+d3.x|| ball.y>=240){
  text("play",900,250)
  fill("white")
}
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW ){
Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10})
  }

}
