class Rectangle{
    widht
    height
    area(){
        return this.widht * this.height
    }
    constructor(width, height){
        this.widht = width,
        this.height = height
    }
}

const rec = new Rectangle(4, 6)
console.log(rec.area())