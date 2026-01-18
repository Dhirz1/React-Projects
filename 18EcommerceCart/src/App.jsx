import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CartDetails from './components/CartDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/CartDetails' element={<CartDetails />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
