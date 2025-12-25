import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadMoreButton from './components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadMoreButton />
    </>
  )
}

export default App
