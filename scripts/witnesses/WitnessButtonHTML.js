const contentTarget = document.querySelector(".WitnessStatementContainer")

export const WitnessButtonHTML = () => {
    contentTarget.innerHTML = `
        <button id="witnessButton">Review All Witness Statements</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const showWitnessesEvent = new CustomEvent("witnessButtonClicked", {
            
        })
        eventHub.dispatchEvent(showWitnessesEvent)
    }
})