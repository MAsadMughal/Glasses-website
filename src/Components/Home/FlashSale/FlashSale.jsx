import React from 'react'
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import glassescar1 from '../../../assets/glassescar1.avif'
import glassescar2 from '../../../assets/glassescar2.avif'
import glassescar3 from '../../../assets/glassescar3.avif'
import glassescar4 from '../../../assets/glassescar4.avif'


export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
    }
};

const FlashSale = () => {
    return (
        <div className='flex flex-col justify-center text-center my-[5%]'>
            <p className='text-2xl font-bold'>Flash Sale</p>
            <MultiCarousel className='mx-[5%] ' infinite={true} arrows={false} partialVisible={false} responsive={responsive} autoPlay={false} >
                {[glassescar1, glassescar2, glassescar3, glassescar4].map((item) => {
                    return (<div className='bg-white p-[10px] flex flex-col justify-center align-middle'>
                        <img src={item} alt="" />
                        <p className='truncate mx-[10px]'>Krystle Square Two-Tone Glasses glasses
                            Krystle Square Two</p>
                        <div className='flex flex-row flex-nowrap px-[5px] justify-center align-middle'>
                            <p className='font-bold text-red-600 text-xs lg:text-lg'>US $7.00</p>
                            <p className='truncate opacity-70 ms-[10px] line-through text-xs lg:text-lg'>US $28.95</p>
                        </div>
                    </div>
                    )
                })}
            </MultiCarousel>
            <button className='mx-[40%] py-[5px] opacity-90 mt-[30px] border-black border-[2px] font-bold'>View More</button>
        </div>

    )
}

export default FlashSale