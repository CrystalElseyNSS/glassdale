const contentTarget = document.querySelector("#toggle__noteForm")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button--showNoteForm") {
        const showNoteFormEvent = new CustomEvent("noteFormButtonClicked")
        eventHub.dispatchEvent(showNoteFormEvent)
    }
})

export const NoteFormButton = () => {
    contentTarget.innerHTML = `
        <button id="button--showNoteForm">Log New Case Note</button>
    `
}