 class Drop {
    constructor(x,y,radius){
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        World.add(world, this.body);
      }
      updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,500)})
        }
    }
      display() {
   
        var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            ellipseMode(CENTER)
            fill("blue")
            ellipse(0,0,this.radius,this.radius)
            //rect(0,0,this.width,this.heiht)
            rotate(angle);
            pop();
      }
    }    
