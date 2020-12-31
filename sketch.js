
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400); 
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  invisibleGround = createSprite(400,360,900,10);
  invisibleGround.visible= false;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
  survivalTime = 0;
}


function draw() {
  background(255);
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,450,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime+Math.round(getFrameRate()/60);
  text("Survival Time: " + survivalTime, 100,50);

  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  console.log(monkey.y);
  
  if(keyDown("space")&& monkey.y >= 324.3) {
     monkey.velocityY = -13; 
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invisibleGround);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
}

function spawnFood() {
  if(frameCount % 80 === 0){
    banana = createSprite(340,200,20,20);
    banana.y = (Math.round(random(120, 220)))
    
    banana.addImage("food",bananaImage);
    banana.scale = 0.1;
    
    banana.velocityX = -5;
    
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  } 
}

function spawnObstacles() {
  if(frameCount % 300=== 0){
    obstacle=createSprite(450,320,50,50);
    
    obstacle.addImage("rock",obstacleImage);
    obstacle.scale = 0.3;
    
    obstacle.velocityX =-5;
    
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
    } 
}


