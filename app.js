// btn.addEventListener("click", (e) => {

//     alert('hey');
//   e.preventDefault();
//   const noteText = contentInput.value.trim();
//   if (noteText !== "") {
//     addNoteToList(noteText);
//     contentInput.value = "";
//   }
// });

// function addNoteToList(noteText) {
//   const li = document.createElement("li");
//   li.textContent = noteText;
//   notesList.appendChild(li);
// }

let contentInput = document.getElementById("input");

let nullDiv = document.getElementById("null-div");

let objData = {};
let title = document.getElementById("title");
let notes = document.getElementById("notes-content");

// let btn = document.querySelector("add-note-btn");

let noteCreat_btn = document.querySelector("#add-note-btn");

let showList = document.querySelector(".taskList");
noteCreat_btn.addEventListener("click", (e) => {
  e.preventDefault();

  objData[title.value] = { title: title.value, notes: notes.value };
  console.log(objData);
  showTask();
  noteCreat_btn.innerText = "Create task";
});
function showTask() {
  showList.innerHTML = "";
  for (let key in objData) {
    let showdiv = document.createElement("div");
    let showTitle = document.createElement("h2");
    showTitle.setAttribute("class", "clickTitle");
    let showNotes = document.createElement("p");
    showNotes.setAttribute("class", "dispNotes");

    showTitle.innerText = objData[key].title;
    showNotes.innerText = objData[key].notes;
    showTitle.addEventListener("click", (e) => {
      e.preventDefault();
      showNotes.classList.toggle("dispNotes");
    });
    let close = document.createElement("button");
    close.setAttribute("class", "delete");
    close.innerText = "X";
    close.addEventListener("click", (e) => {
      e.preventDefault();
      delete objData[key];
      showTask();
      console.log(objData);
    });
    let edit = document.createElement("button");
    edit.setAttribute("class", "Edit");
    edit.innerText = "Edit";
    edit.addEventListener("click", (e) => {
      title.value = objData[key].title;
      notes.value = objData[key].notes;
      noteCreat_btn.innerText = "Update Notes";
    });
    showdiv.appendChild(showTitle);
    showdiv.appendChild(close);
    showdiv.appendChild(edit);
    showdiv.appendChild(showNotes);
    showList.appendChild(showdiv);
  }
}
