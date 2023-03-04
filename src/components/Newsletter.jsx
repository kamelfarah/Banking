import React from 'react'

function Newsletter() {
    return (
        <div className='px-4 w-full text-white bg-[#000300] py-16'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 mt-6'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our Newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <input type="email" placeholder='Your Email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-[#00df9a] font-medium ml-4 my-4 px-6 py-3 rounded-md w-[200px] text-black'>Subscribe</button>

                    </div>
                    <p>We care about the protection of yout data. Read our <span className='text-[#00df9a] cursor-pointer'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
