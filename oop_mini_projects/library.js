class MediaItem{
    title 
    year
     
    constructor(title, year, genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

    getSummery(){
        console.log(`The book is ${this.title} poblish in ${this.year}, catagory${this.genre}`)
    }
}

class Book extends MediaItem{
    author
    pageCount

    constructor(author, pageCount, title, year, genre){
        super(title, year, genre)
        thisk.author = author
        thisk.pageCount = pageCount
    }
    getSummery(){
        console.log(`The book is ${this.title} by ${this.author} poblish in ${this.year}, catagory${this.genre}, and has ${this.pageCount}`)
    }
}

class Movie extends MediaItem{
    director
    durationMinutes

    constructor(director, durationMinutes, title, year, genre){
        super(title, year, genre)
        thisk.director = director
        thisk.durationMinutes = durationMinutes
    }
    getSummery(){
        console.log(`Movie: ${this.title}, directed by ${this.director}, and has length of ${this.durationMinutes}`)
    }
}


class Library{
    constructor(){
        this.media = []
    }

    addItem(item){
        this.media.push(item)
    }
    search(term){
        
    }
    listByGenre(genre){
        return this.media.filter(itme => item.genre === genre)
    }
}