const newBookButton = document.getElementById("add-new-book");

const dialog = document.getElementById("dialog")

const dialogInputArray = document.querySelectorAll("input");

const template = document.getElementById("template");

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
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("1984", "George Orwell", 328, true);
ddBookToLibrary("The 48 Laws of Power", "Robert Greene", 480, true);


function displayBook(book) {
    console.log(book)
    const newBookCard = template.cloneNode(true);
    newBookCard.removeAttribute("id");
    // Setting an attribute to the title so we can remove it later with the delete button.
    newBookCard.setAttribute("bookindex", myLibrary.indexOf(book)) 
    newBookCard.querySelector(".title").textContent = book.title;
    newBookCard.querySelector(".author").textContent = book.author;
    newBookCard.querySelector(".pages").textContent = book.pages;
    newBookCard.querySelector("input").checked = false;

    document.getElementById("library").appendChild(newBookCard);

    bookButtonsListeners(newBookCard);
    setUniqueId(newBookCard)
}


function bookButtonsListeners(bookCard) {
    bookIndex = bookCard.getAttribute("bookindex");
    console.log(bookIndex);
    
    let removeButton = bookCard.querySelector(".borrow-button");
    removeButton.addEventListener("click", () => {
        
        if(myLibrary.length==1){
            myLibrary.length=0;
        }

        bookCard.remove(); // Removes only this book card from DOM
        
        bookIndex = bookCard.getAttribute("bookindex");
        console.log(bookIndex);
        
        myLibrary.splice(bookIndex, 1) //Remove from list of books
    });


}

function setUniqueId(bookCard){

}



console.log(newBookButton)

newBookButton.addEventListener("click", function(){
    dialog.showModal();
    dialog.focus();
})


console.log(dialogInputArray)

dialogInputArray.forEach(element => {
    element.addEventListener("click", function(e){
        if(element.id=="submit"){
            console.log("Submit");

        }
        if(element.id=="cancel"){
            console.log("Cancel")
            e.preventDefault();
            dialog.close();
        }
    })
});