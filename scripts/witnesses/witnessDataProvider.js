let witnessesArray = []

export const useWitnesses = () => witnessesArray.slice()

export const fetchWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        (parsedWitnesses) => {
            witnessesArray = parsedWitnesses
        }
    )
}