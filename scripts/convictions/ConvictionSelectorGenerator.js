const eventHub = document.querySelector(".container")

import { copyOfConvictionsArray } from "./convictionDataProvider.js";

const contentTarget = document.querySelector('#selector__crime');

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelectList") {
        const selectedCrime = changeEvent.target.value
        const crimeChosenEvent = new CustomEvent("crimeSelected", {
            detail: {
                crime: selectedCrime
            }
        })
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})

export const convictionSelectorMaker = () => {
    const newConvictionsArray = copyOfConvictionsArray();
    const renderFunction = (convictionsCollection) => {
        contentTarget.innerHTML = `
            <select id="crimeSelectList">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(singleConviction => {
                    return `<option>${singleConviction.name}</option>`
                })}
            </select>
            `
    }
    renderFunction(newConvictionsArray)
}

export default convictionSelectorMaker