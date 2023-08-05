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
const NewArrivals = () => {
    return (
        <div className='mx-[5%]' style={{
            backgroundImage: 'url("https://s3.zeelool.com/admin/shop/home/cb9bce1f0d028528abaad31283c82152.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', minHeight: '30vh', maxHeight: '100vh'
        }}>
            <MultiCarousel className='pt-[20%] mt-[5vh] pb-[5%] mx-[5%] ' infinite={true} arrows={false} partialVisible={false} responsive={responsive} autoPlay={true} autoPlaySpeed={1000}>
                {[glassescar1, glassescar2, glassescar3, glassescar4].map((item) => {
                    return (<div className='bg-white p-[10px] mx-[5%] mt-[30%] md:mt-[10%] flex flex-col justify-center align-middle'>
                        <img src={item} alt="" />
                        <p className='truncate mx-[10px]'>Krystle Square Two-Tone Glasses glasses
                            Krystle Square Two</p>
                        <div className='flex flex-row flex-nowrap px-[5px] justify-center align-middle'>
                            <p className='truncate font-bold text-red-600 text-xs lg:text-lg'>US $18.36</p>
                            <p className='truncate opacity-70 ms-[10px] line-through text-xs lg:text-lg'>US $32.95</p>
                        </div>
                    </div>
                    )
                })}
            </MultiCarousel>
        </div>
    )
}

export default NewArrivals