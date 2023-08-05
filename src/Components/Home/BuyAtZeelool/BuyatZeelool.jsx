import React from 'react'
import aboutZeelool from '../../../assets/aboutzeelool.avif'

const BuyatZeelool = () => {
    return (
        <div className='mt-[5vh] py-[5vh] flex flex-col align-middle justify-center text-center text-white' style={{
            backgroundImage: `url(${aboutZeelool})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            maxHeight: '400px',
            minHeight: '200px'
        }}>
            <p className='text-2xl font-bold'>Buy glasses about ZEELOOL</p>
                <p className='text-sm mt-[2%] mx-[8%]'>ZEELOOL is committed to delivering a cornucopia of top quality glasses at affordable prices. Whether you are a fashion enthusiast or a daily glasses wearer, we offer various styles and colors to express your personality. Different kinds of lens, including professional prescription with standard lenses, blue blockers, photochromic lenses, polarized sunglasses lenses or mirrored lenses, can meet your vision needs better. Every pair of glasses will be finely processed with advanced equipments, and go through 5 stages quality control before shipment.</p>
                <p className='text-sm text-center mx-[15%]'>At ZEELOOL, we believe everyone can sport the latest styles and fashions in eyeglasses and sunglasses at a true value with unsurpassed service.</p>
        </div>
    )
}

export default BuyatZeelool