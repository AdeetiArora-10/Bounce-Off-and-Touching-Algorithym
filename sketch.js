

var a_rect;
var v_rect
var m_rect;
var f_rect;

function setup() {
  createCanvas(600, 600);

  m_rect = createSprite(200, 200, 50, 50);
  m_rect.shapeColor = "blue";
  //m_rect.debug=true;

  f_rect = createSprite(400, 400, 50, 50);
  f_rect.shapeColor = "pink";
  //f_rect.debug=true;

  v_rect = createSprite(500, 300, 50, 50);
  v_rect.shapeColor = "green";

  a_rect = createSprite(500, 500, 50, 50);
  a_rect.shapeColor = "yellow";

  v_rect.velocityY=5;
  a_rect.velocityY=-5;

}
function draw() {

  background("black");

  // m_rect.y=World.mouseY;
  // m_rect.x=World.mouseX;

  
  touch(m_rect, f_rect);

  //console.log(m_rect.x-f_rect.x);
  //console.log(m_rect.y);

  if(Bounce(v_rect,a_rect)){
    
  a_rect.velocityY=a_rect.velocityY*(-1);
  v_rect.velocityY=v_rect.velocityY*(-1);
  }

  drawSprites();
}


