let officersArray = []

export const copyOfOfficersArray = () => {
    return officersArray.slice()
}

export const fetchOfficersData = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(parsedOfficersArray => {
                console.table(parsedOfficersArray)
                officersArray = parsedOfficersArray
            }
        )
}