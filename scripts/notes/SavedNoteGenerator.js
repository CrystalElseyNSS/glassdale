import { useNotes, fetchNotes } from "./noteDataProvider.js"
import { SavedNoteHTML } from "./SavedNoteHTML.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")
let notesAreVisible = false

eventHub.addEventListener("noteButtonClicked", CustomEvent => {
    console.log("custom event is working")
    notesAreVisible = !notesAreVisible
    if (notesAreVisible) {
        contentTarget.classList.remove("invisible")
        renderNotes()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

export const renderNotes = () => {
    fetchNotes().then(
        () => {
            const savedNotes = useNotes()
            contentTarget.innerHTML = savedNotes.map(
                (currentNoteObj) => {
                    const noteHTML = SavedNoteHTML(currentNoteObj)
                    return noteHTML
                }
            ).join("")
        }
    )        
}