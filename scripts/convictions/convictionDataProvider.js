let convictionsArray = []

export const fetchConvictionsData = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedConvictionsArray => {
            convictionsArray = parsedConvictionsArray
        }
    )
}


export const copyOfConvictionsArray = () => {
    return convictionsArray.slice()
}