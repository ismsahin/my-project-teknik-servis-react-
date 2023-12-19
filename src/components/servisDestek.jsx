import React from 'react'


const servisDestek = () => {
    return (
        <div className=''>
            <div className=' h-[750px] bg-cover bg-center bg-[url("https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
                <div className='p-6 pt-72  flex-wrap flex-col flex justify-end items-end '>
                    
                    <div className='ms-4 px-4 pt-2 md:text-4xl text-lg text-red_orange font-bold bg-dark_mode rounded-t-md bg-opacity-75'>7/24 Müşteri Hizmetleri </div>
                    <div className='w-3/6 ms-4 px-4 py-2 md:text-xl text-white  bg-dark_mode rounded-b-md bg-opacity-75 text-sm'>Servisimiz Türkiye'nin en geniş servis ağına sahipdir. Hemen arayın size en yakın servisi 30 dk içinde yönlendirelim. </div>
                    <div className='grid sm:grid-cols-2 pt-2'>
                        <a href="tel:08508508558" className='text-white   bg-cyan font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN ARA</a>
                        <a href="tel:08508508558" className='text-white   bg-dark_mode font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default servisDestek