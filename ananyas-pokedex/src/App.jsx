import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
        <div className="cardananya">
            <Card className="card-container-2"/>
        </div>

    </div>
  )
}

export default App
