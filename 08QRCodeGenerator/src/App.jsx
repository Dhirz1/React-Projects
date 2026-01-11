import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCodeGenerator from './components/QrCodeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QrCodeGenerator />
    </>
  )
}

export default App
