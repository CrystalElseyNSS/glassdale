const knownAssociatesLoop = (knownAssociatesArray) => {
    let finalAssocHTMLString = ""
    for (const associate of knownAssociatesArray) {
        let iteratedAssocHTMLString = 
            `<ul>
                <li>${associate.name} (Alibi: ${associate.alibi})</li>
            </ul>`
        finalAssocHTMLString += iteratedAssocHTMLString
    }
    return finalAssocHTMLString 
}

const workHistoryLoop = (workHistoryArray) => {
    let finalWorkHTMLString = ""
    for (const job of workHistoryArray) {
        let iteratedWorkHTMLString = 
            `<ul>
                <li>${job}</li>
            </ul>`
        finalWorkHTMLString += iteratedWorkHTMLString
    }
    return finalWorkHTMLString 
}

export const criminalHTML = (criminalObject) => {
    return `
        <section class="criminal__Profile">
            <h2>Potential Suspect #${criminalObject.id}: ${criminalObject.name}</h3>

            <div class="criminal--description">
                <h4>PHYSICAL DESCRIPTION</h4>
                <p>Age: ${criminalObject.age}</p>
                <p>Eye Color: ${criminalObject.eyeColor}</p>
            </div>

            <div class="criminal--workHistory">
                <h4>WORK HISTORY</h4>
                <p>${workHistoryLoop(criminalObject.workHistory)}</p>
            </div>    

            <div class="criminal--incarceration">
                <h4>INCARCERATION DETAILS</h4>    
                <p>Dates: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
                <p>Conviction: ${criminalObject.conviction}</p>
                <p>Arresting Officer: ${criminalObject.arrestingOfficer}</p>
            </div>

            <div class="criminal--knownAssociates">
                <h4>KNOWN ASSOCIATES</h4>
                <p>${knownAssociatesLoop(criminalObject.known_associates)}</p>
            </div>

            <div class="criminal--contactInfo">
                <h4>CONTACT INFO</h4>
                <p>Phone: ${criminalObject.phone}</p>
                <p>Address: ${criminalObject.address}</p>
            </div>

        </section>
    `
}