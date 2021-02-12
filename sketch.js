const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var backgroundImg,background;
var hero,ground,fly;
var block1,block2,block3,block4,block5,block6;
var monster;
function preload() {
backgroundImg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
   background=addImage("background",backgroundImg);

  hero=new Hero(200,200,PI/2);
  ground=new Ground(500,800,30,30);
  fly=new Fly(300,300,40,40);
  block1=new Block(400,500,70,70);
  block2=new Block(500,500,70,70);
  block3=new Block(600,500,70,70);
  block4=new Block(700,500,70,70);
  block5=new Block(800,500,70,70);
  block6=new Block(900,500,70,70);
  monster=new Monster(700,700,60,60);

}

function draw() {
  background(0);
  mouseDragged();
  hero.display();
  ground.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

