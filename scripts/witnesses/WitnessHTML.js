export const WitnessHTML = witness => {
    return `
        <section class="witness__Profile">
            <h3 class="header--witnessProfile">${witness.name}</h3>
            <p class="statement--"witnessProfile">"${witness.statements}"</p>
        </section>
    `
}