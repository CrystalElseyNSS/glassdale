export const SavedNoteHTML = (notes) => {
    return `
        <section class="savedNote" id="savedNote--${notes.id}">
            <p>Date: ${new Date(notes.date).toLocaleDateString()}</p>
            <p>Suspect Name: ${notes.criminal}</p>
            <p>Notes: ${notes.note}</p>
        </section>
    `
}