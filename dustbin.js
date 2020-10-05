class dustbin {
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }
        this.body = bodies.rectangle(x, y, width,  height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("purple");
        fill("purple");
        rectangle(0, 0, this.width, this.height);
    }
}