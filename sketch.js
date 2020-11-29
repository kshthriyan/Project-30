const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground,world;
var polygon,polygonImage,sling;
function preload(){
  polygonImage = loadImage ("polygon.png")
}
function setup() {
  createCanvas(1100,500);

  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon (200,280,20)
  sling = new SlingShot (polygon.body,{x:200,y:250})
  ground = new Ground(550,500,1100,20);
  g1=new Ground (545,400,255,10)
  g2=new Ground (900,250,205,10)
  b1= new Box (635,375,30,40)
  b2= new Box (455,375,30,40)
  b3= new Box (485,375,30,40)
  b4= new Box (515,375,30,40)
  b5= new Box (545,375,30,40)
  b6= new Box (575,375,30,40)
  b7= new Box (605,375,30,40)

  b8= new Box (485,335,30,40)
  b9= new Box (515,335,30,40)
  b10= new Box (545,335,30,40)
  b11= new Box (575,335,30,40)
  b12= new Box (605,335,30,40)

  b13= new Box (515,295,30,40)
  b14= new Box (545,295,30,40)
  b15= new Box (575,295,30,40)

  b16= new Box (545,255,30,40)

  l1 = new Box (840,225,30,40)
  l2 = new Box (870,225,30,40)
  l3 = new Box (900,225,30,40)
  l4 = new Box (930,225,30,40)
  l5 = new Box (960,225,30,40)

  l6=new Box (870,185,30,40)
  l7=new Box (900,185,30,40)
  l8=new Box (930,185,30,40)

  l9 =new Box (900,145,30,40)



  Engine.run(engine);
  
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

  Engine.update(engine);
 
  ground.display();
 
  g1.display()
  g2.display();
  b1.display()
  b2.display()
  b3.display()
  b4.display() 
  b5.display()   
  b6.display()
  b7.display()

  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  
  b13.display()
  b14.display()
  b15.display()

  b16.display()

  l1.display()
  l2.display()
  l3.display()
  l4.display()
  l5.display()

  l6.display()
  l7.display()
  l8.display()

  l9.display()

  polygon.display()
  sling.display()

 drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){

  if(keyCode===32){
      sling.attach(polygon.body)
  }    
  }
