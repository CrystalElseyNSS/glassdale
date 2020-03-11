const eventHub = document.querySelector(".container")

import { criminalHTML } from "./CriminalHTML.js";
import { copyOfCriminalsArray } from "./criminalDataProvider.js";

const contentTarget = document.querySelector('.criminalsList');

export const criminalMaker = () => {
    const newCriminalArray = copyOfCriminalsArray();
    for (const newCriminalObject of newCriminalArray) {
       const newCriminalHTMLString = criminalHTML(newCriminalObject);
       contentTarget.innerHTML += newCriminalHTMLString
    }
}

// filter down the list of criminals to only the criminals whose conviction is equal to the crime sent on the event detail. Loop through filtered list, create HTML for each criminal, append it to the DOM

eventHub.addEventListener("crimeSelected", event => {
    const crimeThatWasChosen = event.detail.crime
    const filteredCriminals = copyOfCriminalsArray().filter(currentCriminal => {
        if (currentCriminal.conviction === crimeThatWasChosen) {
            return true
        } 
        return false
    })   

    // Clear inner HTML of criminal list 

    contentTarget.innerHTML = ""

    // Build it up again by iterating through the array 

    for (const singleCriminal of filteredCriminals) {
        contentTarget.innerHTML += criminalHTML(singleCriminal)
    }
})