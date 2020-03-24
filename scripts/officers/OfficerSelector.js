import { useOfficers } from "./officerDataProvider.js"

const contentTarget = document.querySelector("#selector__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelectList") {
        const chosenOfficer = changeEvent.target.value
        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                officer: chosenOfficer
            }
        })
        eventHub.dispatchEvent(officerChosenEvent)
    }
})

export const officerSelector = () => {
    const newOfficersArray = useOfficers()
    const renderOfficers = (officersCollection) => {
        contentTarget.innerHTML = `
            <select id="officerSelectList">
                <option value="0">Filter Suspects by Arresting Officer</option>
                ${officersCollection.map(singleOfficer => {
                    return `<option>${singleOfficer.name}</option>`
                })}
            </select>    
        `
    }
    renderOfficers(newOfficersArray)
}