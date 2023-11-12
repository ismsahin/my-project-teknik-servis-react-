import { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import "./components/style.css"
import Anasayfa from './components/anasayfa'
import TeknikServis from './components/teknikServis/teknikServis'
import ElektronikServis from './components/elektronikServis/elektronikServis'
import Hakkimizda from './components/Hakkımızda/hakkimizda'
import Iletisim from './components/iletisim/iletisim'
import Page404 from './components/Page404/Page404'

import Nav from './components/Nav'
import Footers from './components/Footers'

function App() {
  return (
    <>
      <div className=' bg-dark_mode' >
        <Nav />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/teknikServis" element={<TeknikServis />} />
          <Route path="/elektronikServis" element={<ElektronikServis />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path='*' element={<Page404/>} />
        </Routes>

        <Footers />
      </div>
    </>
  )
}

export default App
