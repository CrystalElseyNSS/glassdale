import { criminalHTML } from "./CriminalHTML.js"
import { useCriminals, fetchCriminals } from "./criminalDataProvider.js"

const contentTarget = document.querySelector('.criminalContainer')
const eventHub = document.querySelector(".container")
let elementIsVisible = true

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const [prefix, criminalID] = clickEvent.target.id.split("--")
        const showAssociatesEvent = new CustomEvent("associatesButtonClicked", {
            detail: {
                chosenCriminal: criminalID
            }
        })
        eventHub.dispatchEvent(showAssociatesEvent)
    }
})

eventHub.addEventListener("witnessButtonClicked", CustomEvent => {
    elementIsVisible = !elementIsVisible
    elementIsVisible
        ? contentTarget.classList.remove("invisible")
        : contentTarget.classList.add("invisible")
})

eventHub.addEventListener("crimeChosen", event => {
    const crimeThatWasChosen = event.detail.crime
    let filteredCriminals = useCriminals()
    if (crimeThatWasChosen !== "0") {
        filteredCriminals = filteredCriminals.filter(criminal => {
            if (criminal.conviction === crimeThatWasChosen) {
                return true
            } 
            return false
        })
    }
    renderCriminals(filteredCriminals)
})

const renderCriminals = criminalsToRender => {
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            return criminalHTML(criminalObject)
        }
    ).join("")
}

export const CriminalList = () => {
    const criminals = useCriminals()
    renderCriminals(criminals)
}