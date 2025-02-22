let myLibrary = ["nineteenEightyfour"];

function Book(name, author, pages, isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//Can make a prototype that prints whether it was Read or Not based on T / F of the isRead boolean.

let nineteenEightyfour = new Book("1984","George Orwell", 328, true);
let the48LawsofPower = new Book("The 48 Laws of Power","Robert Greene", 480, true);

//Here we take some parameters, create your Book object, and add it to the list of books.
function addBookToLibrary(){

}