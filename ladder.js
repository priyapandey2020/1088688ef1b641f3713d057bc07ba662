class Ladder {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0,
        'density':1.0,
        'isStatic':true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(3)
    
    rect(pos.x, pos.y, this.width, this.height);
  }
};
