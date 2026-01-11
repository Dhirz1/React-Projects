import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Details from './pages/Details'

function App() {

  return (
    <div className=''>
      <div className='min-h-screen w-full bg-white text-black text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
          path='/favorites'
            element={
              <Favorites />
            }
          />
          <Route 
          path='/recipe-item/:id'
          element={
            <Details />
          }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
