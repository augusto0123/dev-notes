// Eventos
const notesContainer = document.querySelector("#notes-container");

const noteInput = document.querySelector("#note-content");

const addNoteBtn = document.querySelector(".add-note");

// Funções

function showNotes(){
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);

        notesContainer.appendChild(noteElement);
    })
}

function addNote(){

    const notes = getNotes();
    
    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);
    noteInput.value = "";
};

function createNote(id, content, fixed){
    const element = document.createElement("div")

    element.classList.add("note")

    const textatea = document.createElement("textarea")

    textatea.value = content

    textatea.placeholder = "Adicione algum texto..."

    element.appendChild(textatea);

    return element;
};

// Local Storage

function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    return notes;
}

function generateId(){
    return Math.floor(Math.random() * 5000);
};

function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Eventos
addNoteBtn.addEventListener("click", () => {
    addNote();
});

// Inicializacao
showNotes();