import { useState } from 'react'
import notesService from 'services/notes'

const NoteForm = ({ notes, setNotes }) => {

    const [newNote, setNewNote] = useState('')
    
    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
     }

    const addNote = event => {
      event.preventDefault()

      if (newNote === '') return

      let bool = false;
      notes.forEach(note => {
        if (note.content === newNote) {
          alert("La note existe déjà")
          bool = true
          return
        }
      });
      if (bool) return

      const noteObject = {
        content: newNote,
        date: new Date(),
        important: Math.random() < 0.5,
      }
    
      notesService.create(noteObject)
        .then(newNote => {
          setNotes(notes.concat(newNote))
          setNewNote('')
        })
    }

    return (
        <form>
            <div>
            A new Note:
            <input 
                value={newNote}
                onChange={handleNoteChange}
                placeholder='add a new Note ...'
            />
            </div>
            <div>
            <button type="submit" onClick={addNote}>add</button>
            </div>
        </form>
    )
}

export default NoteForm