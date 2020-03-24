import { useWitnesses, fetchWitnesses } from './witnessDataProvider.js'
import { WitnessHTML } from './Witness.js'

const contentTarget = document.querySelector('.witnessContainer')
const eventHub = document.querySelector(".container")
let elementIsVisible = false

eventHub.addEventListener("witnessButtonClicked", CustomEvent => {
    elementIsVisible = !elementIsVisible
    if (elementIsVisible) {
        contentTarget.classList.remove("invisible")
        renderWitnesses()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const renderWitnesses = () => {
    fetchWitnesses().then(
        () => {
            const allWitnesses = useWitnesses()
            contentTarget.innerHTML = allWitnesses.map(
                (currentStatementObj) => {
                    const statementHTML = WitnessHTML(currentStatementObj)
                    return statementHTML
                }
            ).join("")
        }
    )
}