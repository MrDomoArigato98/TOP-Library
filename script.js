const newBookButton = document.getElementById("add-new-book");
const dialog = document.getElementById("dialog")
const dialogInputArray = document.querySelectorAll("input");

const dialogSubmitButton = document.getElementById("add")
const dialogCloseButton = document.getElementById("close")

const buttonArray = document.querySelectorAll("input")
let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//Can make a prototype that prints whether it was Read or Not based on T / F of the isRead boolean.


//Here we take some parameters, create your Book object, and add it to the list of books.
function addBookToLibrary(name, author, pages, isRead) {
    let book = new Book(name, author, pages, isRead);
    myLibrary.push(book)
    displayBook(book);
}


addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The 48 Laws of Power", "Robert Greene", 480, true);


function displayBook(book) {
    const template = document.getElementById("template");

    console.log(book)
    const newBookCard = template.cloneNode(true);
    newBookCard.removeAttribute("id");
    newBookCard.setAttribute("bookindex", myLibrary.indexOf(book)) // Setting an attribute to the title so we can remove it later with the delete button.
    newBookCard.querySelector(".title").textContent = book.title;
    newBookCard.querySelector(".author").textContent = book.author;
    newBookCard.querySelector(".pages").textContent = book.pages;
    
    newBookCard.querySelector("#is-read-toggle").checked = false;

    //Display it after.
    template.after(newBookCard)
}

console.log(buttonArray);

newBookButton.addEventListener("click", () => {
    console.log("test");
    dialog.showModal();
});