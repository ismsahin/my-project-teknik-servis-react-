import React, { useState } from 'react'
import Button from './Button';
import repairLogo from '../image/img/repair2.png'


const Nav = () => {
    let Links = [
        { name: "Anasayfa", link: "/" },
        { name: "Eşya Servisi", link: "/" },
        { name: "Teknik Servis", link: "/" },
        { name: "Hakkımızda", link: "/" },
        { name: "İletişim", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img className='w-36 cursor-pointer' src={repairLogo} alt='' />
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='hover:text-ferrari_red border rounded-xl hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>
                        Servis Çağır
                    </Button>
                </ul>
            </div>
        </div>
    )
}

export default Nav