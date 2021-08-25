const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
function setup() {
  createCanvas(800,400);
  var bg = "images/light.jpg"
  var backgroundImg
  soil=new Ground(400, 380, 800, 20);
  platform=new Ground(600, 300, 200, 20);
  brick1=new Box(525, 335, 50, 50);
  brick2=new Box(575, 335, 50, 50);
  brick3=new Box(625, 335, 50, 50);
  brick4=new Box(675, 335, 50, 50);
  brick5=new Box(550, 360, 50, 50);
  brick6=new Box(600, 360, 50, 50);
  brick7=new Box(650, 360, 50, 50);
  brick8=new Box(600, 410, 50, 50);
  brick9=new Box(650, 410, 50, 50);
  brick10=new Box(625, 450, 50, 50);
  polygon=bodies.circle(50, 200, 20)
  World.add(world,polygon);

  slingshot=new slingshot(this.polygon,{x:100, y:200})
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon)
  }
}
  async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();

    var datetime=responseJSON;
    var hour=datetime.slice(11, 13);

    if(hour>=6 && hour<=18){
      bg="images/light.jpg"
    }
    else{
      bg="images/dark.jpg"
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
  }
