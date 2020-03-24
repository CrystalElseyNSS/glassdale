import { useCriminals } from "./criminalDataProvider.js"

const contentTarget = document.querySelector(".associateContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesButtonClicked", CustomEvent => {
    const criminalID = CustomEvent.detail.chosenCriminal
    const criminalsArray = useCriminals()
    const foundCriminal = criminalsArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalID)) {
                return true
            }
            return false
        }
    )
    KnownAssociatesDialog(foundCriminal)
    const associatesDialog = document.querySelector("#associatesDialog")
    associatesDialog.showModal()
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="associatesDialog">
             ${criminalObject.known_associates.map(
                (currentAssociate) => {
                    return `
                        <ul>                            
                            <li>
                                <p>Name: ${currentAssociate.name}</p>
                                <p>Alibi: ${currentAssociate.alibi}</p>
                            </li>
                        </ul>`
                }
            ).join("")
            }
        </dialog>
    `
}