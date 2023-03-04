import React from 'react'
import Typed from 'react-typed';

function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] h-screen mt-[-96px] w-full mx-auto text-center flex flex-col justify-center '>
                <p className='text-[#00df9a]'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-1'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl md:py-1 '>Fast,flexible finacing for</p>
                    <Typed className='pl-2 md:text-5xl sm:text-4xl text-xl text-gray-500' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl text-gray-500 mt-1'>Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] px-12 py-3 mt-2 mx-auto justify-center items-center text-black rounded-md'>Get Started.</button>
            </div>
        </div>
    )
}

export default Hero
