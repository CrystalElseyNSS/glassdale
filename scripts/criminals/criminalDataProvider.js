let criminalsArray = []

export const fetchCriminalsData = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminalsArray => {
                criminalsArray = parsedCriminalsArray
            }
        )
}

export const copyOfCriminalsArray = () => {
    return criminalsArray.slice()
}