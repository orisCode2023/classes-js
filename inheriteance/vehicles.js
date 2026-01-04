class Vehicle{
    type
    constructor(type){
        this.type = type
    }
    describe(){
        console.log(`this is ${this.type}`)
    }
}

class Car extends Vehicle{
    brand
    constructor(type, brand){
        super(type)
        this.brand = brand
    }
    info(){
        console.log(`This is a ${this.brand} ${this.type}`)
    }
}