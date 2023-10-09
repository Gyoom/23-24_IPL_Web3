import notesService from "services/notes"
import Note from "./Note/Note"

const Content = ({notes, setNotes}) => {

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { 
            ...note, 
            important: !note.important 
        }
      
        notesService
        .update(id, changedNote).then(changedNote => {
          setNotes(notes.map(n => n.id !== id ? n : changedNote))
        })
        .catch(error => {
            alert(
              `the note '${note.content}' dont existe on this server`
            )
            setNotes(notes.filter(n => n.id !== id))
        })
    }

    return (
        <ul>
            {notes.map(note => <Note key={note.id} note={note} toggleImportanceOf={toggleImportanceOf}/>)}
        </ul>
    )

}

export default Content