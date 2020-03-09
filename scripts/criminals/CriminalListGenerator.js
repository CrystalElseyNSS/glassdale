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