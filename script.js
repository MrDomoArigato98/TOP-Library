const newBookButton = document.getElementById("addNewBook");
const dialog = document.getElementById("dialog")

let myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//Can make a prototype that prints whether it was Read or Not based on T / F of the isRead boolean.


//Here we take some parameters, create your Book object, and add it to the list of books.
function addBookToLibrary(name, author, pages, isRead) {
    let book = new Book(name, author, pages, isRead);
    myLibrary.push(book)
}


addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The 48 Laws of Power", "Robert Greene", 480, true);

console.log(myLibrary[0])
console.log(myLibrary[1])
function displayBook() {

}


newBookButton.addEventListener("click", () => {
    console.log("test");

    dialog.showModal();
});