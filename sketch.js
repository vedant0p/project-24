
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = createSprite(500,500,1700,20);
    ground = new Ground(400,580,800,20);

	dustbin1 = new Dustbin (530,490, 20,150);
	

	dustbin2 = new Dustbin(670,490, 20,150);
	

	dustbin3 = new Dustbin(600,560, 150,20);


	paper = new Paper(100,300,20);
	

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x: 42,y:-100});
	   
	 }
	}
