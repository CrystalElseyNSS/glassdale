export const NoteHTML = (noteObject, criminal) => {
    return `
        <section class="savedNote" id="savedNote--${noteObject.id}">
            <p>Date: ${new Date(noteObject.date).toLocaleDateString()}</p>
            <p>Suspect Name: ${criminal.name}</p>
            <p>Notes: ${noteObject.note}</p>
            <p><button id="button--deleteNote#${noteObject.id}">Delete Note</button></p>
        </section>
    `
}