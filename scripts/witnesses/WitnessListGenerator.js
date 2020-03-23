import { useWitnesses } from './witnessDataProvider.js';

const contentTarget = document.querySelector('.WitnessStatementContainer')

// renderWitnesses: loops over witnesses, converts to HTML, puts them on DOM
const renderWitnesses = () => {
    const witnesses = useWitnesses() 
    // loop over the array of witnesses 

    // for each individual witness, create HTML and put it on the DOM
}

// WitnessList: function that invokes render
const WitnessList = () => {
    renderWitnesses(witnesses)
}

