import { useState } from 'react'
import "./components/style.css"
import Nav from './components/Nav'
import Footers from './components/Footers'
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
        
        <Footers/>
      </div>
    </>
  )
}

export default App
