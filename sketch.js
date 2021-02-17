const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man_img , thunder1 , thunder2 , thunder3;
var maxDrops = 100;
var drops = [];
var thunder;
var thunderFrameCount = 0;
var umbrella;
var engine , world
function preload(){
  man_img = loadImage("man.png");
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
}

function setup(){
  createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,3));

  if(frameCount%80===0){
    thunder = createSprite(random(10,370),random(10,30),10,10);

   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default: break;
     
   }
   thunderFrameCount = frameCount ;
   thunder.scale = random(0.3 , 0.6);
  }
  if(thunderFrameCount+ 10 === frameCount && thunder){
    thunder.destroy();
  }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
}


