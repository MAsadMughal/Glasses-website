import React from 'react'
const TwoBanners = ({banner1,banner2}) => {
    return (
        <div className='flex flex-row flex-nowrap mx-[5%] my-5 space-x-2 justify-center'>
            <div><img src={banner1} alt="" /></div>
            <div><img src={banner2} alt="" /></div>
        </div>
    )
}

export default TwoBanners