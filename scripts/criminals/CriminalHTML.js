const workHistoryLoop = (workHistoryArray) => {
    let finalWorkHTMLString = ""
    for (const job of workHistoryArray) {
        let iteratedWorkHTMLString = 
            `<ul class="criminalProfile__jobList>
                <li>${job}</li>
            </ul>`
        finalWorkHTMLString += iteratedWorkHTMLString
    }
    return finalWorkHTMLString 
}

export const CriminalHTML = (criminalObject) => {
    return `
        <section class="criminal__Profile">
            <h2 class="criminalProfile--header">Potential Suspect #${criminalObject.id}: ${criminalObject.name}</h2>

            <div class="criminalProfile__description">
                <h4 class="criminalProfile--divHeader">PHYSICAL DESCRIPTION</h4>
                <p>Age: ${criminalObject.age}</p>
                <p>Eye Color: ${criminalObject.eyeColor}</p>
            </div>

            <div class="criminalProfile__workHistory">
                <h4 class="criminalProfile--divHeader">WORK HISTORY</h4>
                <p>${workHistoryLoop(criminalObject.workHistory)}</p>
            </div>    

            <div class="criminalProfile__incarceration">
                <h4 class="criminalProfile--divHeader">INCARCERATION DETAILS</h4>    
                <p>Dates: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
                <p>Conviction: ${criminalObject.conviction}</p>
                <p>Arresting Officer: ${criminalObject.arrestingOfficer}</p>
            </div>

            <div class="criminalProfile__contactInfo">
                <h4 class="criminalProfile--divHeader">CONTACT INFO</h4>
                <p>Phone: ${criminalObject.phone}</p>
                <p>Address: ${criminalObject.address}</p>
            </div>

            <button id="associates--${criminalObject.id}" class="button--showAssociates">View Known Associates</button>
            
        </section>
    `
}