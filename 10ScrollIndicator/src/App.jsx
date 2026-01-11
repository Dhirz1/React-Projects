import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollIndicator from './components/Index'

function App() {

  return (
    <>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </>
  )
}

export default App
