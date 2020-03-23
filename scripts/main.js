import './criminals/KnownAssociatesDialog.js'
import { WitnessButtonHTML } from './witnesses/WitnessButtonHTML.js'
WitnessButtonHTML()

import { fetchWitnessData } from './witnesses/witnessDataProvider.js'
fetchWitnessData().then()

import { fetchCriminalsData } from './criminals/criminalDataProvider.js'
import { criminalMaker } from './criminals/CriminalListGenerator.js'
fetchCriminalsData().then(criminalMaker)

import { fetchConvictionsData } from './convictions/convictionDataProvider.js'
import { convictionSelectorMaker } from './convictions/ConvictionSelectorGenerator.js'
fetchConvictionsData().then(convictionSelectorMaker)

import { NoteForm } from './notes/NoteForm.js'
NoteForm()
