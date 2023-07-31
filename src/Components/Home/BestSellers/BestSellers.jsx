import React from 'react'
import bests1 from '../../../assets/bestsellerend.avif'
import bests2 from '../../../assets/bessellerread.avif'
import bests3 from '../../../assets/bestsellermen.avif'
import bestbar from '../../../assets/bestsellersbar.avif'

const BestSellers = () => {
    return (
        <div className='flex flex-col items-center mt-[10vh]'>
            <p className='text-3xl font-bold font-sans'>Buy glasses at ZEELOOL</p>
            <p className='text-md mt-3 font-sans text-sm w-[90%] md:w-[50%] text-center opacity-70'>Rich in style and well-crafted, zeelool optical has helped 1,000,000 families to see clearly,
                and claim their fashion statement at the same time.</p>
            <div className="flex flex-nowrap w-[90%] justify-between space-x-1 md:space-x-3 mt-5">
                <div className='flex flex-col items-center'><img src={bests1} alt="" /><p className='mt-2 text-lg'>Women</p></div>
                <div className='flex flex-col items-center'><img src={bests2} alt="" /><p className='mt-2 text-lg'>Men</p></div>
                <div className='flex flex-col items-center'><img src={bests3} alt="" /><p className='mt-2 text-lg'>Reading</p></div>
                <div className='flex flex-col items-center'><img src={bests1} alt="" /><p className='mt-2 text-lg'>Kids</p></div>
                <div className='flex flex-col items-center'><img src={bests2} alt="" /><p className='mt-2 text-lg'>Women</p></div>
                <div className='flex flex-col items-center'><img src={bests3} alt="" /><p className='mt-2 text-lg'>Men</p></div>
            </div>
            <div className='w-[90%] flex flex-row justify-center mt-10'><img width={'100%'} src={bestbar} alt='bar' /></div>
        </div>
    )
}

export default BestSellers