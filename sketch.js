const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles=[]
var plinkos=[];
var divisions=[]


function setup() {
  createCanvas(600,600);
  engine = Engine.create();
    world = engine.world;

    for(var j=40;j<=width;j=j+50){

      plinkos.push(new Plinko(j,75));
    }
    
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    
    }
}

function draw() {
  background("black");  



for(var j=0; j< particles.length;j++){
  particles[j].display();
}




  drawSprites();
}