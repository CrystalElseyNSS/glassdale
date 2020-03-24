let criminalsArray = []

export const fetchCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminalsArray => {
                criminalsArray = parsedCriminalsArray
            }
        )
}

export const useCriminals = () => {
    return criminalsArray.slice()
}