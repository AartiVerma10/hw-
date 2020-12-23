class Ground{
    constructor(){
        var options={
            isStatic: true  
        }
    this.body=Bodies.rectangle(400,480,800,20);
    this.width=800;
    this.height=20;
    this.posx=this.body.position.x;
    this.posy=this.body.position.y;
    World.add(world, this.body);
    }
    display(){
     
        rectMode(CENTER);
        push();
        fill("white");
        rect(this.posx,this.posy,this.width,this.height);
        pop();
    }
}