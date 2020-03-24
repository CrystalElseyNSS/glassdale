let officersArray = []

export const fetchOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(parsedOfficersArray => {
                officersArray = parsedOfficersArray
            }
        )
}

export const useOfficers = () => {
    return officersArray.slice()
}