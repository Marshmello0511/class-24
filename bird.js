class Bird {
    constructor(x, y) {   //user shouldn't enter the value of width and height
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options); //width and height are constant for pig
        this.width = 40;
        this.height = 40;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;   //namespacing
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // strokeWeight(4);
        //stroke("green");
        fill("red");
        rect(0, 0, this.width, this.height);
    
        pop();
      }
}