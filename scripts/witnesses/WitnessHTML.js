export const WitnessHTML = witness => {
    return `
        <section class="statement">
            <h3>${witness.name}</h3>
            <p>${witness.statements}</p>
        </section>
    `
}