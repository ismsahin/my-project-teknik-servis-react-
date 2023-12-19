import React, { useState } from 'react'
import repairLogo from '../image/img/repair2.png'
import { Routes, Route, Link, NavLink } from 'react-router-dom'


const Nav = () => {
    let [open, setOpen] = useState(false);
    return (


        <div className='shadow-xl w-full sticky top-0 left-0 z-10'>
            <div className='xl:flex items-center justify-between bg-white py-4 xl:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl mr-1 pt-2'>
                        <Link to="/"><img className='w-36 cursor-pointer' src={repairLogo} alt='' /></Link>
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer xl:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>


                <ul className={`xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                        <Link to="/" className='hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>Anasayfa</Link>
                    </li>
                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                        <Link to="/teknikServis" className='hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>Teknik Servis</Link>
                    </li>
                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                        <Link to="/elektronikServis" className='hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>Elektronik Servis</Link>
                    </li>
                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                        <Link to="/hakkimizda" className='hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>Hakkımızda</Link>
                    </li>
                    

                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                        <Link to="/ServisCagir" className='  border-solid hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>Servis Çağır</Link>
                    </li>
                    <li className='xl:ml-8 text-xl xl:my-0 my-7'>
                    <a href="tel:08508508558" className='text-white  bg-cyan font-bold rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN ARA</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Nav