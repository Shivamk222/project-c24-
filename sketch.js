var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ballSprite=createSprite(100,600, 10,10);

	var options = {
		isStatic: true, 
		restitution:0.3,
		friction: 0.5,
		density: 1.2
	   }
ballBody = Bodies.circle(100,600,10,10,options);
World.add (world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}



