const contentTarget = document.querySelector("#button--showNotes")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", ClickEvent => {
    console.log("mo is great the click is working")
    if (ClickEvent.target.id === "noteButton") {
        console.log("mo is rad the button is working")
        const showNotesEvent = new CustomEvent("noteButtonClicked")
        eventHub.dispatchEvent(showNotesEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = `<button id="noteButton">View Suspect Notes</button>`
}