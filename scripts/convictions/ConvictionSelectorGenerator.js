import { copyOfConvictionsArray } from "./convictionDataProvider.js";

const contentTarget = document.querySelector('.selector__crime');

export const convictionSelectorMaker = () => {
    const newConvictionsArray = copyOfConvictionsArray();
    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(crime => {
                    return `<option id="crime--${crime.id}" class="crimeMenuItem">${crime.name}</option>`
                })       
            }
            </select>
            `
    }
    render(newConvictionsArray)
}

export default convictionSelectorMaker