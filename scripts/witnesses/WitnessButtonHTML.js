const contentTarget = document.querySelector("#toggle__witnesses")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button--showWitnesses") {
        const showWitnessesEvent = new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(showWitnessesEvent)
    }
})

export const WitnessButtonHTML = () => {
    contentTarget.innerHTML = `
        <button id="button--showWitnesses">View Witness Statements</button>
    `
}