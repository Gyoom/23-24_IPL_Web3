const Anecdote = ({ anecdote }) => {
    
    return (
         <p>{anecdote.content} BY {anecdote.author} </p>
    )
}

export default Anecdote