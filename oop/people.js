class Person{
    name
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Person{
    school
    constructor(name, school){
        super(name)
        this.school = school
    }
    study(){
        console.log(`${this.name} is studing at ${this.school}`)
    }
}

const student = new Student("Alice", "Oxford")
student.greet()
student.study()