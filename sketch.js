class Ball{
  constructor(x,y){
    this.x =x;
    this.y =y;
  }
  
mostrar(){
  ellipse(this.x, this.y,50,50);
}
  
mover(){
  this.x++;
  this.y++;
}
}

var pelota;

function setup() {
  createCanvas(400, 400);
  pelota = new Ball(200,200);
}

function draw() {
  background(220);
  pelota.mostrar();
  pelota.mover();
  console.log(pelota);
}
