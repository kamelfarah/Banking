import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
import Card from './Card'

function Cards() {
    return (
        //card prices and features fromhttps://github.com/fireclint/data-finance-react-tailwind
        <div className='w-full py-[10rem] px-4 bg-white text-center items-center justify-center'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
                <Card
                    src={single}
                    textUser='Single User'
                    price='$149'
                    storage='500 GB Storage'
                    granted='1 Granted User'
                    Data='Send Up to 2 GB'
                    buttonColor='#00df9a'
                    textButton='#000300'

                />
                <Card
                    src={double}
                    textUser='Partnership'
                    price='$199'
                    storage='1 TB Storage'
                    granted='3 Users Allowed'
                    Data='Send Up to 10 GB'
                    buttonColor='#000300'
                    textButton='#00df9a'
                    margin
                />
                <Card
                    src={triple}
                    textUser='Group Account'
                    price='$299'
                    storage='5 TB Storage'
                    granted='10 Users Allowed'
                    Data='Send Up to 20 GB'
                    buttonColor='#00df9a'
                    textButton='#000300'

                />
            </div>
        </div>

    )
}

export default Cards
