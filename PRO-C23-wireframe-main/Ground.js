class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.property=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        World.add(world,this.property)

    }
    display(){
        var rec=this.property.position
        rectMode(CENTER)
        push()
        fill("orange")
        rect(rec.x,rec.y,this.width,this.height)
        pop()
    }
}