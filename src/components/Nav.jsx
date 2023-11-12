import React, { useState } from 'react'
import Button from './Button';
import repairLogo from '../image/img/repair2.png'


const Nav = () => {
    let Links = [
        { name: "Anasayfa", link: "/" },
        { name: "Teknik Servis", link: "/" },
        { name: "Müşteri Yorumları", link: "/" },
        { name: "Hakkımızda", link: "/" },
        { name: "İletişim", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-xl w-full sticky top-0 left-0 '>
            <div className='xl:flex items-center justify-between bg-white py-4 xl:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img className='w-36 cursor-pointer' src={repairLogo} alt='' />
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer xl:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='xl:ml-8 text-xl xl:my-0 my-7'>
                                <a href={link.link} className='hover:text-ferrari_red border rounded-xl border-white hover:border-ferrari_red hover:rounded-xl p-2 px-3 '>{link.name}</a>
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