import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect (()=>{
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
    }
    )
    .catch((error)=>{
      console.log(error);
    })

  })

  return (
    <>
      <h1>Fullstack Project Here</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => {
          const { id, title, content } = joke;
          return <div key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
