import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(prev => !prev)
    }


    return (
        <div className='text-white flex justify-between items-center max-w-[1240px] mx-auto h-24'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BANKING.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleMenu} className='block md:hidden'>
                {!menu ? <AiOutlineMenu size={20} className="cursor-pointer " /> : <AiOutlineClose size={20} className=" cursor-pointer " />}
            </div>
            {menu &&
                <div className='fixed  top-0 left-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' >
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                    <ul className='p-4 uppercase cursor-pointer'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>Resources</li>
                        <li className='p-4 border-b border-gray-600'>About</li>
                        <li className='p-4'>Contact</li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Navbar
