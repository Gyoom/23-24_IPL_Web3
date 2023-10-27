import { Link, Route, Routes, useMatch } from 'react-router-dom'
import AnecdoteList from '../AnecdoteList/AnecdoteList'
import About from '../About/About'
import NewAnecdote from '../NewAnecdote/NewAnecdote'
import Anecdote from '../Anecdote/Anecdote'

const Menu = ({ anecdotes, addNew }) => {
    const padding = {
      paddingRight: 5
    }

    const match = useMatch('/anecdote/:id')
    const anecdote = match 
        ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
        : null
  
    return (
      <div>
        <Link style={padding} to={'/'}>anecdotes</Link>
        <Link style={padding} to={'/newAnecdote'}>create new</Link>
        <Link style={padding} to={'/about'}>about</Link>
  
        <Routes>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/newAnecdote" element={<NewAnecdote addNew={addNew} />} />
          <Route path="/anecdote/:id" element={<Anecdote anecdote={anecdote} />} />
          <Route path="/about" element={<About />} />
        </Routes>
  
      </div>
    )
}

export default Menu;