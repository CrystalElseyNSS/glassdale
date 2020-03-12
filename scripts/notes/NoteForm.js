const contentTarget = document.querySelector("#criminalNoteForm")


export const NoteForm = () => {
    const renderNote = () => {
        return contentTarget.innerHTML = `
            <div class="noteForm__input">
                <label class="input--label" for="input--date">TODAY'S DATE: </label>
                <input type="date" name="input--date" id="input--date" class="input--field"/>
            </div>
            <div class="noteForm__input">
                <label class="input--label" for="input--criminal">SUSEPECT NAME: </label>
                <input type="text" name="input--criminal" id="input--criminal" class="input--field"/>
            </div>
            <div class="noteForm__input">
                <label class="input--label" for="input--note">CASE NOTES: </label>
                <textarea cols=80 rows="10" name="input--note" id="input--note" class="input--field"></textarea>
            </div>
            <input type="submit" value="SAVE" class="button--save"/>
            `
    }
    renderNote()
}