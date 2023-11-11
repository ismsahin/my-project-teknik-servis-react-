import { useState } from 'react'
import "./components/style.css"
import Nav from './components/Nav'
import Footers from './components/Footer'
import ServisDestek from './components/servisDestek'
import Guvenilirlik from './components/Guvenilirlik'
import MusteriYorum from './components/musteriYorum'

function App() {
  return (
    <>
      <div className='w-full h-screen bg-gray-400' >
        <Nav/>
        <ServisDestek/>
        <Guvenilirlik/>
        <MusteriYorum/>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        
        <Footers/>
      </div>
    </>
  )
}

export default App
