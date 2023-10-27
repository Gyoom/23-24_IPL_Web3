import { useState, useEffect } from 'react'
import { useNavigate, Link, Route, Routes, useMatch } from 'react-router-dom'
import { Layout, message } from 'antd'
import AnecdoteList from '../AnecdoteList/AnecdoteList'
import About from '../About/About'
import NewAnecdote from '../NewAnecdote/NewAnecdote'
import Anecdote from '../Anecdote/Anecdote'
import FooterPage from '../FooterPage/FooterPage'

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color: '#fff',
  backgroundColor: '#7dbcea',
  
  height: 100
};
const contentStyle = {
  color: '#fff',
  backgroundColor: '#108ee9',
  padding: 50
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => {

  const navigate = useNavigate()
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const [messageApi, contextHolder] = message.useMessage();

  const padding = {
    paddingRight: 10,
    color: '#fff',
  }

  // const hook = () => {

  //   setTimeout(notification != '' ? setNotification('') : null, 5000)
  // }

  // useEffect(hook, [notification])


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    messageApi.open({
      type: 'success',
      content: 'A new Anecdote added : ' + anecdote.content,
    })
    navigate('/')
  }

  const match = useMatch('/anecdote/:id')
    const anecdote = match 
        ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
        : null

  return (
    <Layout>
      <Header style={headerStyle}>
          <h1 style={{height:10}}>Software anecdotes</h1>
          <div>
            <Link style={padding} to={'/'}>Anecdotes</Link>
            <Link style={padding} to={'/newAnecdote'}>Create new</Link>
            <Link style={padding} to={'/about'}>About</Link>
          </div>
      </Header>
      <Content style={contentStyle}> 
          {contextHolder}     
          <Routes>
            <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
            <Route path="/newAnecdote" element={<NewAnecdote addNew={addNew} />} />
            <Route path="/anecdote/:id" element={<Anecdote anecdote={anecdote} />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Content>
      <Footer style={footerStyle}><FooterPage /></Footer>
    </Layout>
  )
}

export default App
