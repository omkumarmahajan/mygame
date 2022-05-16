
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0
var PLAY = 0
var END = 0
var score =0
var text1 =0
var text2 = 0
var text3 = 0
var life = 100 
var alien
var alien2
function preload()
{
knifeImg = loadImage("bullet img.png")	
jetImg = loadImage("my game .png")
alieani = loadImage("kikrmada perfect.png")
bg = loadImage("bg 5.jpg")
fireImg = loadImage("fire2 perfect.png")
reImg = loadImage("restart.png")
}

function setup() {
	createCanvas(1350,620);

wall1 = createSprite(800,800,10,60)
wall1.visible = false
wall2 = createSprite(0,800,10,60)
wall2.visible = false

	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.
	jet = createSprite(500,500,20,20)
  jet.addImage(jetImg) 
  jet.scale = 0.3 

alienobs = new Group() 
jetbullet = new Group()
alienobs2 = new Group()
alfire = new Group()
alfire2 = new Group()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  fill("red")
  textSize(15)
  text("SCORE :"+score,50,100)
  text1= text(" PRESS RIGHT ARROW TO MOVE RIGHT AND PRESS LEFT ARROW TO MOVE LEFT",25,150)
  
  text2 = text("PRESS SPACE TO SHOOT THE BULLET",220,250) 
  text("Life :" +life,300,100)

 


  if(gameState === PLAY){

   

    shootbullet() 
    alien()
    alien2()
    spreadfire() 

    if(keyDown("RIGHT_ARROW"))
  {
	  jet.x = jet.x+ 10
  }
   
  if(keyDown("LEFT_ARROW"))
  {
    jet.x = jet.x-10
  }

  if(score > 100 )
  {
    alienobs.velocityX =-28
    alienobs2.velocityX = -28
  }
  if(score > 200 )
  {
    alienobs.velocityX =-38
    alienobs2.velocityX = -38
  }
   
}

if(alienobs.isTouching(jetbullet))
{
  jetbullet.destroyEach()
  alienobs.destroyEach()
  score = score+10
}

if(alienobs2.isTouching(jetbullet))
{
  jetbullet.destroyEach()
  alienobs2.destroyEach()
  score = score+10
}

if (alfire.isTouching(jet))
{
      life = life-5
      alfire.destroyEach()
}

if (alfire2.isTouching(jet))
{
     life= -5
     alfire2.destroyEach()
}
  
if(life < 0)
{
  text("GAME OVER",500,500)
  alfire.velocityY = 0
  alfire2.velocityY = 0
  alienobs.velocityX = 0
  alienobs2.velocityX = 0
  text("To restart the game press shift ", 500,700)
}

if(keyDown("Shift"))
{
  gameState = PLAY
}

jet.bounceOff(wall1)
jet.bounceOff(wall2)
 
drawSprites();
 
}


function shootbullet() 
{
  if(keyDown("space"))
  {
    bullet=createSprite(jet.x,jet.y,20,20)
    bullet.addImage(knifeImg)
    bullet.scale = 0.1

    bullet.velocityY = -30
    jetbullet.add(bullet)   
      
  }
}

function alien()
{
  if(frameCount % 160 === 0)
   {
     var alien = createSprite(1400,50,40,40)
     alien.y= random(80,350)
     alien.addImage(alieani)
     alien.scale = 0.5
     alien.velocityX = -10

     alien.lifetime = 300;
     alienobs.add(alien)

   }
}

function alien2()
{
  if(frameCount % 160 === 0)
   {
     var alien2 = createSprite(2100,50,40,40)
     alien2.y= random(80,350)
     alien2.addImage(alieani)
     alien2.scale = 0.5
     alien2.velocityX = -10

     alien2.lifetime = 300;
     alienobs2.add(alien2)

   }
}

function spreadfire() 
{
  if(frameCount % 40 === 0)
  {
    fire=createSprite(1400,50,20,20)
    fire.x= random(40,1050)
    fire.addImage(fireImg)
     fire.scale = 0.2

    fire.velocityY = 20
    alfire.add(fire)   
      
  }
}

function spreadfire2() 
{
  if(frameCount % 40 === 0)
  {
    fire2=createSprite(2100,50,20,20)
    fire2.x= random(40,1050)
    fire2.addImage(fireImg)
     fire2.scale = 0.2

    fire2.velocityY= 20
    alfire2.add(fire2)   
      
  }
}

