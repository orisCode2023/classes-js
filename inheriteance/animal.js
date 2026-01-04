class Animal{
    name
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} make sounds`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    bark(){ 
        console.log(`${this.name} barks `)
    }
}

