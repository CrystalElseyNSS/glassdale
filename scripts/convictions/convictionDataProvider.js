let convictionsArray = []

export const fetchConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedConvictionsArray => {
            convictionsArray = parsedConvictionsArray
        }
    )
}

export const useConvictions = () => {
    return convictionsArray.slice()
}