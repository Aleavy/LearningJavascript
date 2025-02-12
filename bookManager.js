

class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const bookCollection = [new Book("The hallow", "Pepe", 2024, "Horror"), new Book("The pop", "Pepe", 2025, "Horror")];

const showAll = array =>{
    array.forEach((element, index) => {
        console.log(`${index + 1}. Title: ${element.title} | Author: ${element.author} | Year: ${element.year} | Genre: ${element.genre}`);
    });
}

const filterByYear = (year, collection) =>{
    collection.forEach((book) => {
        let index = 1
        if (book.year == year){
            console.log(`${index}. Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre}`);
            index++;
        }
    });
}

const addBook = (collection, book) => {
    if (book instanceof Book) {
        collection.push(book);
     } else{
        return `This: ${book} is not a book.`;
    } 
}

showAll(bookCollection);
filterByYear(2025, bookCollection)
addBook(addBook(bookCollection, new Book("Hi", "Hello", 2020, "Horay")))
showAll(bookCollection);