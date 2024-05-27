import { useState } from 'react'
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import './App.css'
import Creations from './components/Creations.jsx';
import Footer from './components/Footer.jsx';

function App() {
  
  return (
   
      <div className="main-container">
        <Hero/>
        <Introduction/>
       <Creations/> 
       <Footer/>
      </div>
  )
}

export default App
