class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {

    super.display();
    if ((this.body.speed>10)&&(this.body.position.x>200)){
      var pos= [this.body.position.x,this.body.position.y]
    this.trajectory.push(pos)
    
    
    }
    for (var i=0;i<this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }
    
  }
}
