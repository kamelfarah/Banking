import React from 'react'

function Card({ src, textUser, price, storage, granted, Data, buttonColor, textButton, margin }) {
    return (
        <div className={`w-full shadow-xl ${margin ? 'md:my-0 my-8 bg-gray-100' : 'my-4 hover:bg-gray-100 hover:my-8 hover:md:my-0'}  p-4 cursor-pointer rounded-lg hover:scale-105 duration-300 text-center`}>
            <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-md ' src={src} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>{textUser}</h2>
            <p className='text-center text-4xl font-bold'>{price}</p>
            <div>
                <p className='py-2 border-b mx-8 mt-8'>{storage}</p>
                <p className='py-2 border-b mx-8'>{granted}</p>
                <p className='py-2 border-b mx-8'>{Data}</p>
            </div>
            <button className={`bg-[${buttonColor}] font-medium ml-4 my-4 px-6 py-3 rounded-md w-[200px] text-[${textButton}]`}>Start Trial</button>
        </div>
    )
}

export default Card
