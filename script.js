//Button for new books top right
const newBookButton = document.getElementById("add-new-book");

//Gets the Dialog element of the page using ID
const dialog = document.getElementById("dialog")
//These are all the inputs from the dialog
const dialogInputArray = document.querySelectorAll("input");
const userForm = document.getElementById("user-form")
const template = document.getElementById("template");

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
Book.prototype.toggleRead = function () {
    if (this.isRead == "read") {
        console.log("not-read")
        this.isRead = "not-read"
    } else {
        this.isRead = "read"
        console.log("read")
    }
}

//Here we take some parameters, create your Book object, and add it to the list of books.
function addBookToLibrary(title, author, pages, isRead) {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book)
    displayBook(book);
}


addBookToLibrary("1984", "George Orwell", 328, "read");
addBookToLibrary("The 48 Laws of Power", "Robert Greene", 480, "not-read");


function displayBook(book) {
    console.log(book)
    const newBookCard = template.cloneNode(true);
    newBookCard.removeAttribute("id");
    // Setting an attribute to the title so we can remove it later with the delete button.
    newBookCard.setAttribute("bookindex", myLibrary.indexOf(book))
    newBookCard.querySelector(".title").textContent = book.title;
    newBookCard.querySelector(".author").textContent = book.author;
    newBookCard.querySelector(".pages").textContent = book.pages;

    document.getElementById("library").appendChild(newBookCard);

    toggleDisplayReadStatus(newBookCard,book)
    bookButtonsListeners(newBookCard,book);
    setUniqueId(newBookCard)
}

function toggleDisplayReadStatus(bookCard,book){
    if (book.isRead == "read") {
        bookCard.querySelector("input").checked = true;
    } else {
        bookCard.querySelector("input").checked = false;
    }
}
function bookButtonsListeners(bookCard, book) {
    bookIndex = bookCard.getAttribute("bookindex");
    console.log(bookIndex);

    let bookButtons = bookCard.querySelectorAll("button")
    console.log(bookButtons);

    bookButtons.forEach(button => {
        button.addEventListener("click", function () {

            if (button.getAttribute("class") == "read-button") {
                console.log("Read-button")
                book.toggleRead();
                toggleDisplayReadStatus(bookCard,book)
            }

            if (button.getAttribute("class") == "borrow-button") {
                console.log("borrow")
                if (myLibrary.length == 1) {
                    myLibrary.length = 0;
                }

                bookCard.remove(); // Removes only this book card from DOM

                bookIndex = bookCard.getAttribute("bookindex");
                console.log(bookIndex);

                myLibrary.splice(bookIndex, 1) //Remove from list of books
            }

        })
    })
}

function setUniqueId(bookCard) {

}


newBookButton.addEventListener("click", function () {
    resetDialogInput();
    dialog.showModal();
    dialog.focus();
})

dialogInputArray.forEach(element => {
    element.addEventListener("click", function (e) {
        if (element.id == "submit-btn") {
            console.log("Submit");
            getDialogInput()
        }
        if (element.id == "cancel-btn") {
            console.log("Cancel")
            // e.preventDefault();
            dialog.close();
        }
    })
});

console.log(dialog)
console.log(dialogInputArray)

function getDialogInput() {
    let authorInput = document.getElementById('author-input').value;
    let titleInput = document.getElementById('title-input').value;
    let pagesInput = document.getElementById('pages-input').value;
    const selectedOption = document.querySelector('input[name="read-toggle"]:checked');
    let readInput = selectedOption.id

    validateForm(authorInput, titleInput, pagesInput, readInput)

}
function resetDialogInput() {
    let authorInput = document.getElementById('author-input').value = ""
    let titleInput = document.getElementById('title-input').value = ""
    let pagesInput = document.getElementById('pages-input').value = ""
}

function validateForm(authorInput, titleInput, pagesInput, readInput) {
    if (authorInput === "" || titleInput === "" || pagesInput === "") {
        console.log("Missing field")
    } else {
        addBookToLibrary(titleInput, authorInput, pagesInput, readInput)
    }
}