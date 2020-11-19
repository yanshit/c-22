const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;


function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
var object_options={isStatic:true}
var ground_options={isStatic:true}
var ball_options={restitution:2}
  object=Bodies.rectangle(200,100,50,50,object_options);
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  ball=Bodies.circle(200,100,20,ball_options);

  World.add(world,object);
  World.add(world,ground);
  World.add(world,ball);
  //createSprite(400, 200, 50, 50);

  console.log(object);
}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
  rect(200,200,50,50);
  //drawSprites();
}