import './witnesses/WitnessList.js'
import './criminals/KnownAssociatesDialog.js'
import { NoteForm } from './notes/NoteForm.js'
import { NoteList } from './notes/NoteList.js'
import { CriminalList } from './criminals/CriminalList.js'
import { fetchCriminals } from './criminals/criminalDataProvider.js'
import { ShowNotesButton } from './notes/NoteListButton.js'
import { fetchConvictions } from './convictions/convictionDataProvider.js'
import { convictionSelector } from './convictions/ConvictionSelector.js'
import { fetchOfficers } from './officers/officerDataProvider.js'
import { officerSelector } from './officers/OfficerSelector.js'
import { ShowFormButton } from './notes/NoteFormButton.js'
import { ShowWitnessesButton } from './witnesses/WitnessButton.js'


fetchCriminals()
    .then(CriminalList)
    .then(NoteList)
    .then(NoteForm)

fetchConvictions().then(convictionSelector)
fetchOfficers().then(officerSelector)

ShowNotesButton()
ShowFormButton()
ShowWitnessesButton()