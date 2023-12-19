import React from 'react'

const Guvenilirlik = () => {
  return (
    <div className=''>
      <div className=' w-full mx-auto h-[750px] object-cover bg-cover bg-center  bg-[url("https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>
        <div className='p-6 pt-80 flex-wrap flex-col flex justify-start items-start'>

          <div className='ms-4 px-4 pt-2  xl:text-4xl text-lg text-red_orange font-bold bg-dark_mode rounded-t-md me-0 bg-opacity-75'>Alanında Uzman Ekip</div>
          <div className='w-3/6 ms-4 px-4 py-2 xl:text-xl text-white  bg-dark_mode rounded-b-md bg-opacity-75 text-sm'>Merkez Servis Türkiyenin en geniş servis ağına sahipdir. Lg  Beyaz Eşyalarınız İçin İhtiyacınız olan servis hizmetini Merkez Servisten alın, size en yakın servisi 30 dk içinde yönlendirelim. </div>
          <div className='grid sm:grid-cols-2 ms-4 pt-2'>
            <a href="tel:08508508558" className='text-white   bg-dark_mode font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a>
            <a href="tel:08508508558" className='text-white   bg-cyan font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN ARA</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Guvenilirlik