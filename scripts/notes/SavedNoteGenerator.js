import { useNotes, fetchNotes } from "./noteDataProvider.js"
import { SavedNoteHTML } from "./SavedNoteHTML.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

let notesAreVisible = false

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
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

const renderNotesList = () => {
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
                return SavedNoteHTML(currentNoteObj, foundCriminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    renderNotesList()
}