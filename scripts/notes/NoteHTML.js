export const NoteHTML = (notes) => {
    return `
        <section class="savedNote" id="savedNote--${notes.id}">
            <p>Date: ${new Date(notes.date).toLocaleDateString()}</p>
            <p>Suspect Name: ${notes.name}</p>
            <p>Notes: ${notes.note}</p>
            <p><button id="button--deleteNote#${notes.id}">Delete Note</button></p>
        </section>
    `
}