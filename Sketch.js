function preload(){
  trex_running=loadAnimation("trex_1.png", "trex_2.png", "trex_3.png");
  ground_img=loadImage("ground.png")
}
function setup(){
  createCanvas(1800,800);
  trex=createSprite(50,600,20,20);
  ground=createSprite(0,710,1000,20)
  ground.addImage("moving", ground_img)
  trex.addAnimation("running", trex_running);
  trex.scale=0.15;
  trex.depth=ground.depth;
  trex.depth=trex.depth+1
}
function draw(){
  background("lightblue");
  ground.velocityX=-3;
  drawSprites();
}