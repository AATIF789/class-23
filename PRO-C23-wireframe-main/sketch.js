const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground
var cannon
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    tower=new Tower(100,500,110,600)
    ground= new Ground(600,790,1200,20)
    cannon= new Cannon(180,110,110,50,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display()
    ground.display()
    cannon.display()
}
