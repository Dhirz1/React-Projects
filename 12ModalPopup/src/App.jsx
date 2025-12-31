import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modaltest from './components/modal-text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modaltest />
    </>
  )
}

export default App
