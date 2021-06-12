class Sand  {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.x=x;
      this.y=y;
     this.width=width;
     this.height=height;

      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    };
    display(){
      var Sandpos = this.body.position;
       push();
      translate(Sandpos.x, Sandpos.y);
     strokeWeight(4);
      stroke("black");
      fill("red");
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  