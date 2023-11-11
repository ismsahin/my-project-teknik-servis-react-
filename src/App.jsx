import { useState } from 'react'
import "./components/style.css"
import Nav from './components/Nav'
import Footer from './components/Footer'
import ServisDestek from './components/servisDestek'
import Guvenilirlik from './components/Guvenilirlik'
import MusteriYorum from './components/musteriYorum'

function App() {
  return (
    <>
      <div className=' bg-gray-100' >
        <Nav/>
        <ServisDestek/>
        <Guvenilirlik/>
        <MusteriYorum/>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
