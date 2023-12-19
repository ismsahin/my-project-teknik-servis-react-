import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
        <div className='h-150 object-cover bg-cover  md:mx-auto w-full bg-[url("https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>
            
            <div className='p-12 items-center flex justify-center align-top'>

                <Link className='hover:bg-dark_mode hover:text-ferrari_red hover:border-ferrari_red text-6xl xl:text-6xl bg-opacity-75 bg-dark_mode rounded-2xl text-cyan border-cyan font-bold p-8 border border-solid border-medium' to="/">ANASAYFAYA DÖN</Link>

            </div>
            
        </div>
        
    
    </>

  )
}

export default Page404