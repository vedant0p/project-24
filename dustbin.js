class Dustbin{

    constructor(x,y,width,height) {

        var option = {
            isStatic: true
            }

        this.body = Bodies.rectangle(x,y,width,height,option);
       this.width = width;
       this.height = height;
        World.add(world,this.body);


    }

    display() {

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();
    }

}