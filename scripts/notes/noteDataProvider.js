const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const fetchNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(fetchNotes)
        .then(dispatchStateChangeEvent)
}

export const saveNote = (note) => {
    fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(fetchNotes)
    .then(dispatchStateChangeEvent)
}

export const useNotes = () => {
    return notes.slice()
}

