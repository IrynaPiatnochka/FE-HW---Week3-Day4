// Task 1: Create a constructor function for the Book object

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
// Task 2: Implement a method within the Book object to display book information
    
    bookInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books
const library = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title) {
    const foundBooks = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    return foundBooks;
}

function searchByAuthor(author) {
    const foundBooks = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    return foundBooks;
}

// Task 4: Find books with more than 100 pages and add "Title: " and "Author: " to the book's properties
function findBooksByPages() {
    return library.filter(book => book.pages <= 100);
}

function addProperties() {
    return library.map(book => {
        return {
            "Title": book.title,
            "Author": book.author,
            "Pages": book.pages
        };
    });
}

console.log("List of Books:");
library.forEach(book => book.bookInfo());

const inputOfTitle = prompt("Enter the title of the book look for: ");
console.log("\nBooks by title:");
searchByTitle(inputOfTitle).forEach(book => book.bookInfo());

const inputOfAuthor = prompt("Enter the author of the book look for: ");
console.log("\nBooks by author:");
searchByAuthor(inputOfAuthor).forEach(book => book.bookInfo());

console.log("\nBooks with over 100 pages:");
findBooksByPages().forEach(book => book.bookInfo());

console.log("\nFormatted Books:");
addProperties().forEach(book => console.log(book));

