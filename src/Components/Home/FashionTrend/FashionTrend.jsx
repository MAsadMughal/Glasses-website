import React, { useState } from 'react'
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import glassescar1 from '../../../assets/glassescar1.avif'
import glassescar2 from '../../../assets/glassescar2.avif'
import glassescar3 from '../../../assets/glassescar3.avif'
import glassescar4 from '../../../assets/glassescar4.avif'
import clsx from 'clsx';
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const FashionTrend = () => {
    const [curr, setCurr] = useState(0)
    // const arr = [glassescar1, glassescar2, glassescar3, glassescar4, glassescar2]
    const data = [{ title: 'Office Chic', img: 'https://s3.zeelool.com/admin/shop/home/cd1bb743a9f7294c4d54deac5b65e6d6.jpg', images: [glassescar1, glassescar2, glassescar3, glassescar4] }, { title: 'School Style', img: 'https://s3.zeelool.com/admin/shop/home/cd1bb743a9f7294c4d54deac5b65e6d6.jpg', images: [glassescar3, glassescar4, glassescar2, glassescar1] }, { title: 'Street Style', img: 'https://s3.zeelool.com/admin/shop/home/cd1bb743a9f7294c4d54deac5b65e6d6.jpg', images: [glassescar1, glassescar2, glassescar3, glassescar4] }, { title: 'Office Style', img: 'https://s3.zeelool.com/admin/shop/home/cd1bb743a9f7294c4d54deac5b65e6d6.jpg', images: [glassescar3, glassescar4, glassescar2, glassescar1] }]
    return (

        <div className='flex flex-row flex-nowrap mx-[5%]'>

            <div className='flex flex-col justify-center align-middle w-[10%] min-h-[80vh]'>
                {data.map((item, ind) => {
                    return (<div onClick={() => setCurr(ind)} className={clsx(`cursor-pointer font-bold text-center flex align-middle justify-center flex-col h-[25%] bg-blue-600 text-white`, ind === curr && 'bg-white text-neutral-900')}>{item.title}</div>)
                })}
            </div>
            <div className='' style={{
                backgroundImage: `url(${data[curr].img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', height: '80vh', width: '90%'
            }}>
                <MultiCarousel className='ms-[45%] my-[5%] w-[50%] me-[30px]' infinite={true} arrows={false} responsive={responsive} autoPlay={true}  >
                    {data[curr].images.map((item, ind) => {
                        return (
                            <div className="flex flex-col gap-y-4 me-4 border-none">
                                <div className='bg-white p-[10px] flex flex-col justify-center align-middle'>
                                    <img src={item} alt="" />
                                    <p className='truncate mx-[10px]'>Krystle Square Two-Tone Glasses glasses
                                        Krystle Square Two</p>
                                    <div className='flex flex-row flex-nowrap px-[5px] justify-center align-middle'>
                                        <p className='font-bold text-red-600 text-xs lg:text-lg'>US $7.00</p>
                                        <p className='truncate opacity-70 ms-[10px] line-through text-xs lg:text-lg'>US $28.95</p>
                                    </div>
                                </div>
                                <div className='bg-white p-[10px] flex flex-col justify-center align-middle'>
                                    <img src={ind !== data[curr].images.length - 1 ? data[curr].images[ind + 1] : data[curr].images[0]} alt="" />
                                    <p className='truncate mx-[10px]'>Krystle Square Two-Tone Glasses glasses
                                        Krystle Square Two</p>
                                    <div className='flex flex-row flex-nowrap px-[5px] justify-center align-middle'>
                                        <p className='font-bold text-red-600 text-xs lg:text-lg'>US $7.00</p>
                                        <p className='truncate opacity-70 ms-[10px] line-through text-xs lg:text-lg'>US $28.95</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </MultiCarousel>
            </div>
        </div>
    )
}

export default FashionTrend