const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,iron,rubber,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber = new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(5,4,10,15);
    sand2 = new Sand(5,4,10,15);
    sand3 = new Sand(5,4,10,15);
    sand4 = new Sand(5,4,10,15);
    sand5 = new Sand(5,4,10,15);
    sand6 = new Sand(5,4,10,15);
    sand7 = new Sand(5,4,10,15);
    sand8 = new Sand(5,4,10,15);
    sand9 = new Sand(5,4,10,15);
    sand10 = new Sand(5,4,10,15);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    stone.display();
    iron.display();
    rubber.display();
    hammer.display();

    
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();    
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
}