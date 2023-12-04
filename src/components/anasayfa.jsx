import React from 'react'


import ServisDestek from './servisDestek'
import Guvenilirlik from './Guvenilirlik'
import MusteriYorum from './musteriYorum'

const anasayfa = () => {
  return (
    <>
      <div className=''>
        <ServisDestek />
        <Guvenilirlik />
        <MusteriYorum />
      </div>


    </>
  )
}

export default anasayfa