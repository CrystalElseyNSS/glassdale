import { fetchCriminals } from './criminals/criminalDataProvider.js'
import { CriminalList } from './criminals/CriminalListGenerator.js'
import { fetchConvictions } from './convictions/convictionDataProvider.js'
import { convictionSelectorMaker } from './convictions/ConvictionSelectorGenerator.js'
import { ShowNotesButton } from './notes/ShowNoteListButton.js'
import { NoteForm } from './notes/NoteForm.js'
import { WitnessButtonHTML } from './witnesses/WitnessButtonHTML.js'
import './criminals/KnownAssociatesDialog.js'
import './witnesses/WitnessListGenerator.js'
import './notes/SavedNoteGenerator.js'


fetchCriminals().then(CriminalList)
fetchConvictions().then(convictionSelectorMaker)

ShowNotesButton()
NoteForm()
WitnessButtonHTML()