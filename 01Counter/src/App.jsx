import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(1 + counter)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  const clearValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Value: {counter}</h1>
      <div>
        <button onClick={addValue}>Add</button>
        <br /><br />
        <button onClick={removeValue}>Remove</button>
        <br /><br />
        <button onClick={clearValue}>Clear</button>
      </div>
    </>
  )
}

export default App
