import './witnesses/WitnessListGenerator.js'
import './criminals/KnownAssociatesDialog.js'
import { NoteForm } from './notes/NoteForm.js'
import { NotesList } from './notes/SavedNoteGenerator.js'
import { CriminalList } from './criminals/CriminalListGenerator.js'
import { fetchCriminals } from './criminals/criminalDataProvider.js'
import { ShowNotesButton } from './notes/ShowNoteListButton.js'
import { fetchConvictions } from './convictions/convictionDataProvider.js'
import { convictionSelector } from './convictions/ConvictionSelector.js'
import { fetchOfficers } from './officers/officerDataProvider.js'
import { officerSelector } from './officers/OfficerSelector.js'
import { NoteFormButton } from './notes/ShowNoteFormButton.js'
import { WitnessButtonHTML } from './witnesses/WitnessButtonHTML.js'


fetchCriminals()
    .then(CriminalList)
    .then(NotesList)
    .then(NoteForm)

fetchConvictions().then(convictionSelector)
fetchOfficers().then(officerSelector)

ShowNotesButton()
NoteFormButton()
WitnessButtonHTML()