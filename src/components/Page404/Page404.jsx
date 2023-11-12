import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
        <div className='h-150 object-cover bg-cover xl:container bg-[url("https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>
            
            <div className='text-center h-150 min-h-screen gap-4 items-center p-10'>

                <Link className='h-150 justify-center text-4xl xl:text-6xl bg-opacity-75 bg-dark_mode rounded-2xl p-2' to="/">ANASAYFAYA DÖN</Link>

            </div>
            
        </div>
        
    
    </>

  )
}

export default Page404