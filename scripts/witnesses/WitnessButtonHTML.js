const contentTarget = document.querySelector("#button--showWitnesses")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const showWitnessesEvent = new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(showWitnessesEvent)
    }
})

export const WitnessButtonHTML = () => {
    contentTarget.innerHTML = `
        <button id="witnessButton">View Witness Statements</button>
    `
}