import React from 'react'
import laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus magni dolorem numquam quam omnis.
                        Soluta perspiciatis, autem pariatur similique,
                        officiis at quia ullam modi dolorem,
                        exercitationem dolor fugit eveniet aliquam.</p>
                    <button className='bg-[#00df9a] w-[200px] px-12 py-3 mt-2 mx-auto md:mx-0 justify-center items-center text-black rounded-md'>Get Started.</button>
                </div>

            </div>

        </div>
    )
}

export default Analytics
