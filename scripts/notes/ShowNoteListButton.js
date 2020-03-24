const contentTarget = document.querySelector("#toggle__noteList")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", ClickEvent => {
    if (ClickEvent.target.id === "button--showNotes") {
        const showNotesEvent = new CustomEvent("showNotesButtonClicked")
        eventHub.dispatchEvent(showNotesEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = `
        <button id="button--showNotes">View Suspect Notes</button>
    `
}