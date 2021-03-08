const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,550,1200,20);
    
    ball = new Ball(200,200, 80,80);

    rope = new Rope(ball.body,{x:200, y:50});

    box1 = new Box(500,100,80,80);
    box2 = new Box(500,100,80,80);
    box3 = new Box(500,100,80,80);
    box4 = new Box(500,100,80,80);
    box5 = new Box(500,100,80,80);
}

function draw(){
    
        background(255);
    
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();

    ball.display();

    //log6.display();
    rope.display();  
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}

 function mouseDragged(){
     if (gameState!=="launched"){
         Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
     }
 }



 function keyPressed(){
     if(keyCode === 32 && ball.body.speed < 1){
         Matter.Body.setPosition(ball.body,{x:200,y:50});
        rope.attach(ball.body);
    }
}
