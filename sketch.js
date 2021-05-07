var jerry,jerryImg,jerryRun,jerryWatch;

var garden,gardenImg;

var tom,tomRun,tomStop,tomImg;

function preload() {
    //load the images here
  gardenImg=loadImage("images/garden.png");
  jerryRun=loadAnimation("images/jerryTwo.png","images/jerryThree.png");  
  jerryWatch=loadAnimation("images/jerryFour.png"); 
  jerryImg=loadAnimation("images/jerryOne.png");
  tomImg=loadAnimation("images/tomFour.png");
  tomStop=loadAnimation("images/tomOne.png");
  tomRun=loadAnimation("images/tomThree.png","images/tomTwo.png");

}
//           ,
// |\/\/\/\|
// |_______|
//
function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here

   garden=createSprite(500,350,1000,800);
   garden.addImage(gardenImg);

   jerry=createSprite(200,550,1000,800);
   
   jerry.addAnimation("laughingJerry",jerryImg);
   jerry.scale=0.09;
       
   tom=createSprite(600,550,1000,800);
   tom.addAnimation("tomSleeping",tomStop);
   tom.scale=0.3/2;
    
  }

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collideSS
    


    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
     tom.addAnimation("stopping",tomImg);
    tom.changeAnimation("stopping");
    jerry.addAnimation("stopping",jerryWatch);
    jerry.changeAnimation("stopping");
    tom.velocityX=0
    tom.x=300;   
  
  }
  keyPressed()
   drawSprites();
  
  }

function keyPressed(){

  //For tom and changing animation write code here
  if(keyDown("left_arrow")){
    tom.velocityX=-3;
    tom.addAnimation("running",tomRun);
    tom.changeAnimation("running");
    
    jerry.addAnimation("teasing",jerryRun);
    jerry.changeAnimation("teasing");
  }
  

  

}
