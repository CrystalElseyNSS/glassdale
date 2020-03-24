import { saveNote } from "./noteDataProvider.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let noteFormIsVisible = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    noteFormIsVisible = !noteFormIsVisible
    if (noteFormIsVisible) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const criminalName = document.querySelector("#input--criminal").value 
        const noteText = document.querySelector("#input--note").value 
        const newNote = {
                date: Date.now(),
                criminal: criminalName,
                note: noteText,  
            }
        saveNote(newNote)
    }
})

const renderNoteForm = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()
    return contentTarget.innerHTML = `
        <div class="noteForm__field">
            <label class="input--label" for="input--date">TODAY'S DATE: </label>
            <input type="date" name="input--date" id="input--date" class="input--field"/>
        </div>
        <div class="noteForm__field">
            <label class="input--label" for="input--criminal">SUSEPECT NAME: </label>
            <select name="input--criminal" id="select--criminal" class="input--field">
                <option value="0">Select a Criminal</option>
                ${
                    allCriminals.map(
                        (currentCriminalObj) => {
                            return `<option value="${currentCriminalObj.id}">${currentCriminalObj.name}</option>`
                        }
                    )
                }
            </select>        
        </div>
        <div class="noteForm__field">
            <label class="input--label" for="input--note">CASE NOTES: </label>
            <textarea cols=80 rows="10" name="input--note" id="input--note" class="input--field"></textarea>
        </div>
        <button type="submit" id="saveNote" class="button--save">SAVE</button>
        `
}

export const NoteForm = () => {
    renderNoteForm()
}