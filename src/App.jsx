import { useState } from 'react'
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import './App.css'

function App() {
  
  return (
   
      <div className="main-container">
        <Hero/>
        <Introduction/>
      </div>
  )
}

export default App
