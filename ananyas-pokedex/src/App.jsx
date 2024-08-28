import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
        <Card />
    </div>
  )
}

export default App
