let witnessesArray = []

export const fetchWitnessData = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedWitnessesArray => {
        witnessesArray = parsedWitnessesArray
    })
}

export const useWitnesses = () => {
    return witnessesArray.slice()
}