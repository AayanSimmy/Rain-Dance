const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dropArray=[]
function preload(){
    
}

function setup(){
   
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0; i<100; i++){
var drop=new Drop(random(0,400),random(0,50),5)
dropArray.push(drop)
    }
}

function draw(){
    Engine.update(engine);
    background(0)
    for(var i=0; i<100; i++){
        dropArray[i].display()
        dropArray[i].updateY()
}   
}
