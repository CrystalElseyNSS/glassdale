import { useNotes, fetchNotes, deleteNote } from "./noteDataProvider.js"
import { NoteHTML } from "./NoteHTML.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

let notesAreVisible = false

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("button--deleteNote")) {
        const [garbageTaco, noteID] = clickEvent.target.id.split("#")
        deleteNote(noteID)
    }
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    renderNoteList()
})

eventHub.addEventListener("showNotesButtonClicked", CustomEvent => {
    notesAreVisible = !notesAreVisible
    if (notesAreVisible) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const renderNoteList = () => {
    if (notesAreVisible) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }

    fetchNotes().then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObj => {
                const foundCriminal = allTheCriminals.find(
                    (currentCriminalObj) => {
                        return currentNoteObj.criminal === currentCriminalObj.id
                    }
                )
                return NoteHTML(currentNoteObj, foundCriminal)
            }
        ).join("")
    })
}

export const NoteList = () => {
    renderNoteList()
}