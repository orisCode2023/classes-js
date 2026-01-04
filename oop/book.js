class Book{
    title
    author
    constructor(title, author){
        this.title = title
        this.author = author
    }
    info(){
        console.log(`${this.title} by ${this.author}`)
    }
}

const book = new Book("The Hobbit", "Tolkien")
book.info()