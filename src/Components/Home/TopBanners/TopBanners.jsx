import React from 'react'
import topBanner from '../../../assets/topbanner1.gif'
import topBanner2 from '../../../assets/allunder16.avif'
import topBanner3 from '../../../assets/lastchanceclearance.webp'
const TopBanners = () => {
    return (
        <div className='flex mt-[20vh] flex-nowrap flex-row justify-center align-middle mx-[5%] space-x-3'>
            <div><img src={topBanner} alt="" /></div>
            <div className='flex flex-nowrap flex-col align-middle justify-center space-y-2'>
                <div><img src={topBanner2} alt="" /></div>
                <div className='ps-0'><img src={topBanner3} alt="" /></div>
            </div>
        </div>
    )
}

export default TopBanners