class Phone{
    #brand
    model
    constructor(brand, model){
        this.#brand = brand,
        this.model = model
    }
    deatails(){
        console.log("Phone: ", this.#brand, this.model)
    }
}

const p = new Phone("Iphon", "16 PRO MAX")


