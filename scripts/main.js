import { fetchCriminalsData } from './criminals/criminalDataProvider.js'
import { criminalMaker } from './criminals/CriminalListGenerator.js'

fetchCriminalsData().then(criminalMaker)