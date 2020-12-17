class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic:true,
          
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = radius;
     

     

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle)
      fill("white");
      ellipseMode(CENTER);
      ellipse(0,0,this,radius,this.radius);
      
      pop();
    }
  };