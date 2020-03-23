import { copyOfCriminalsArray } from "./criminalDataProvider.js"

const contentTarget = document.querySelector(".KnownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesButtonClicked", CustomEvent => {
    const criminalID = CustomEvent.detail.chosenCriminal
    const criminalsArray = copyOfCriminalsArray()
    const foundCriminal = criminalsArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalID)) {
                return true
            }
            return false
        }
    )
    KnownAssociatesDialog(foundCriminal)
    const criminalDialog = document.querySelector("#criminalDialog")
    criminalDialog.showModal()
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="criminalDialog">
            ${criminalObject.known_associates.map(
                (currentAssociate) => {
                    return `
                    <div>${currentAssociate.name}</div>`
                }
            ).join("")}
        </dialog>
    `
}