import React from 'react'
import memorywall from '../../../assets/memorywall.avif'
import seller1 from '../../../assets/seller1.jpg'
import seller2 from '../../../assets/seller2.jpg'

const Memorywall = () => {
    return (
        <>
            <div className='mt-[50px] flex justify-center align-middle' >
                <img className='max-w-[150px]' src={memorywall} alt="" />
            </div>
            <div className='flex flex-row flex-nowrap space-x-1 md:space-x-4 align-middle justify-center mt-4 mx-[5%]'>
                <div className='flex flex-col items-center'>
                    <img className='' src={seller1} alt="" />
                    <button className='text-xs w-full py-1 bg-white mt-2 border-black border-[1px] md:border-[2px] font-bold'>Shop Now</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={seller2} alt="" />
                    <button className='text-xs w-full py-1 bg-white mt-2 border-black border-[1px] md:border-[2px] font-bold'>Shop Now</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={seller1} alt="" />
                    <button className='text-xs w-full py-1 bg-white mt-2 border-black border-[1px] md:border-[2px] font-bold'>Shop Now</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={seller2} alt="" />
                    <button className='text-xs w-full py-1 bg-white mt-2 border-black border-[1px] md:border-[2px] font-bold'>Shop Now</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={seller1} alt="" />
                    <button className='text-xs w-full py-1 bg-white mt-2 border-black border-[1px] md:border-[2px] font-bold'>Shop Now</button>
                </div>
            </div>
            <div className='flex flex-row space-x-2 justify-center align-middle mt-[5vh]'>
                <div className='cursor-pointer h-[10px] w-[10px] bg-blue-700 rounded-full'></div>
                <div className='cursor-pointer h-[10px] w-[10px] bg-blue-500 rounded-full'></div>
                <div className='cursor-pointer h-[10px] w-[10px] bg-blue-300 rounded-full'></div>
            </div>
            {/* <div className='text-blue-800 font-bold ms-5 cursor-pointer'>MORE &gt;&gt;</div> */}
        </>
    )
}

export default Memorywall