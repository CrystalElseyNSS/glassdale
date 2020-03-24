import { useConvictions } from "./convictionDataProvider.js";

const contentTarget = document.querySelector('#selector__crime');
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelectList") {
        const chosenCrime = changeEvent.target.value
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                crime: chosenCrime
            }
        })
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})

export const convictionSelector = () => {
    const newConvictionsArray = useConvictions()
    const renderConvictions = (convictionsCollection) => {
        contentTarget.innerHTML = `
            <select id="crimeSelectList">
                <option value="0">Filter Suspects by Crime</option>
                ${convictionsCollection.map(singleConviction => {
                    return `<option>${singleConviction.name}</option>`
                })}
            </select>
        `
    }
    renderConvictions(newConvictionsArray)
}