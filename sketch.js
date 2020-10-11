var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivaltime=0
var PLAY
var END
var gameState=PLAY
var gameover="try again"
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400)
  ground = createSprite(200, 380, 1900, 40);
  monkey = createSprite(55, 330, 20, 20)

  monkey.addAnimation("mo", monkey_running);
  monkey.scale = 0.1
  
  ig = createSprite(200, 390, 1900, 20)
  ig.visible = false;
  
  fruitGroup = new Group();
  obGroup= new Group();
 
  obGroup.setLifetimeEach=(-1)
  fruitGroup.setLifetimeEach=(-1)
}


function draw() {
  background("skyblue")
 
  monkey.collide(ig)
  monkey.velocityY = monkey.velocityY + 8;
 
  if(gameState===PLAY){
  if (keyDown("space") && monkey.y >= 60) {
    monkey.velocityY = -10;
  }
   
                   
    
  gameover.visible=false

  if(monkey.isTouching(fruitGroup)){
    score=score+2
    fruitGroup.destroyEach();
  }
   banana();
  obstacle();
  }
 if(monkey.isTouching(obGroup)){
 gameState=END
 
  if(gameState===END){
    fruitGroup.setVelocityXEach(0)
     fruitGroup.destroyEach();
    
     monkey.velocityY=0
    obGroup.setVelocityXEach(0) 
    gameover.visible=true;
    stroke("black");
    textSize(20);
    fill("black");
    text("Gameover: " + gameover,180,200);
survivaltime=0
  }
  
 }

 
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white")
  text("Score:" + score, 500, 50);
text("survival Time:"+survivaltime,100,50)
 survivaltime=Math.ceil(frameCount/frameRate())
 

}

function banana() {
  if (frameCount % 80 == 0) {
    fruit = createSprite(600, 200, 20, 20);
    fruit.velocityX = -(7+(score/10));
    fruit.y = Math.round(random(120, 360));
    fruit.addImage(bananaImage);
    fruit.scale = 0.2
    fruitGroup.add(fruit);
    fruit.lifetime = 600;
  }
  monkey.debug = true
  monkey.setCollider("circle",0,0,200)
}
function obstacle(){
if(frameCount%300==0){
  ob=createSprite(600,360,20,20);
  var rand= Math.round(random(1,6));
  switch (rand) {
    case 1:ob.addImage(obstaceImage)
      break;
      case 2:ob.addImage(obstaceImage)
      break
      case 3:ob.addImage(obstaceImage)
      break;
      case 4:ob.addImage(obstaceImage)
      break;
      case 5:ob.addImage(obstaceImage)
      break;
      case 6:ob.addImage(obstaceImage)
      break
      default:break;
  }
      
  ob.velocityX=-(8+(score/10))
  ob.lifetime=300;
  ob.addImage(obstaceImage);
  ob.scale=0.2;
  obGroup.add(ob);
  ob.debug=false
} 
}


