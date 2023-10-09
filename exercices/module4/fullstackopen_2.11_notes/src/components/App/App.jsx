import { useState, useEffect } from 'react'
import notesService from "services/notes"

import Content from "components/Content/Content"
import Header from "components/Header/Header"
import NoteForm from "components/NoteForm/NoteForm"

const App = () => {
  const [notes, setNotes] = useState([])

  const hook = () => {
    notesService.getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])

  return (
    <>
      <Header />
      <NoteForm notes={notes} setNotes={setNotes} />
      <Content notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App