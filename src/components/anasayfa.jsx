import React from 'react'


import ServisDestek from './servisDestek'
import Guvenilirlik from './Guvenilirlik'
import MusteriYorum from './musteriYorum'
import AnasayfaSlider from './anasayfaSlider'

const anasayfa = () => {
  return (
    <>
      <div className='md:w-9/12 md:mx-auto'>
        <AnasayfaSlider/>
        <ServisDestek />
        <Guvenilirlik />
        <MusteriYorum />
      </div>


    </>
  )
}

export default anasayfa