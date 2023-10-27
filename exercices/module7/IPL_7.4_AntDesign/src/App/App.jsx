import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
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

  const [notification, setNotification] = useState('')

  const hook = () => {

    setTimeout(notification != '' ? setNotification('') : null, 5000)
  }

  useEffect(hook, [notification])


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification('A new Anecdote added : ' + anecdote.content)
    navigate('/')
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Layout>
      <Header style={headerStyle}><h1>Software anecdotes</h1></Header>
      <Content style={contentStyle}>      
          <Menu anecdotes={anecdotes} addNew={addNew}/>
          <h3>{notification}</h3>
      </Content>
      <Footer style={footerStyle}><Footer /></Footer>
    </Layout>
  )
}

export default App
