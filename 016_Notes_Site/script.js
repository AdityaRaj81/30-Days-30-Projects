const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", function() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
    saveData();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                saveData();
            }
        });
    }
});

function saveData() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showData() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showData();

document.addEventListener("keydown",event=>{        /*  to get into different line */
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})