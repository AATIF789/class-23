class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    }
    display(){
        push()
        fill("green")
        rect(-10,-20,this.width,this.height)
        pop()
        arc(this.x-40,this.y+80,180,230,PI,TWO_PI)
    }
}