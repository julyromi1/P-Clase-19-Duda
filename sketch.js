var roadImg;
var carroImg;
var gameoverImg;
var guasonImg;
var harleyquinnImg;
var InsigniaImg;
var KaboomImg;
var WinnerImg;
var ZaapImg;
var roadImg;
var road;
var carro;
var guason;
var harleyquinn;
var insignia;
var kaboom;

function preload(){
carroImg = loadImage ("carrobatman.png");
gameoverImg = loadImage ("gameover.png");
guasonImg = loadImage ("guason.png");
harleyquinnImg = loadImage ("harleyquinn.png");
InsigniaImg = loadImage ("insignia.png");
KaboomImg = loadImage ("kaboom.png");
WinnerImg = loadImage ("winner.png");
ZaapImg = loadImage ("zaap.png");
roadImg = loadImage ("Road.png");
}

function setup() {
    createCanvas(1200,300);

road=createSprite(100,150);
road.addImage(roadImg);
road.velocityX = -8;

carro=createSprite(100,150);
carro.addImage(carroImg);
carro.scale= 0.1;

kaboom=createSprite(100,150);
kaboom.addAnimation("stop", KaboomImg);
kaboom.scale=0.1;


guasongroup = new Group ();

}

function draw() {
background ("black");
drawSprites ();

carro.y = World.mouseY;

if(road.x < 0){
  road.x = width/2;
}

if (World.frameCount % 20 == 0){
  holaguason ();
}
if (World.frameCount % 40 == 0){
  holaharleyquinn ();
}
if (World.frameCount % 60 ==0) {
  holainsignia ();
}

if (guasongroup.isTouching (carro)){
  guason.changeAnimation (KaboomImg);
  trex11.changeAnimation ("stop", trexdead);

}





}

function holaguason (){
  var guason= createSprite (990,Math.round(random(20,200)),1,2);  
  guason.addImage (guasonImg);
  guason.velocityX=-3;
  guason.lifetime=350;
  guason.scale=0.1;
  guasongroup.add (guason);
}

function holaharleyquinn (){
  var harleyquinn= createSprite (890,Math.round(random(20,200)),1,2);
  harleyquinn.addImage(harleyquinnImg);
  harleyquinn.velocityX= -4;
  harleyquinn.lifetime=300;
  harleyquinn.scale=0.1;
}

function holainsignia (){
  var insignia= createSprite (990,Math.round(random(20,200)),1,2);
  insignia.addImage (InsigniaImg);
  insignia.velocityX= -2;
  insignia.lifetime=500;
  insignia.scale=0.04;
}