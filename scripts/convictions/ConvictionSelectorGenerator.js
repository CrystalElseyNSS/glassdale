import { copyOfConvictionsArray } from "./convictionDataProvider.js";

const contentTarget = document.querySelector('.selector__crime');

export const convictionSelectorMaker = () => {
    const newConvictionsArray = copyOfConvictionsArray();
    const renderFunction = (convictionsCollection) => {
        contentTarget.innerHTML = `
            <select>
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