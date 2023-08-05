import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsSearch, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsEnvelope, BsPhone } from 'react-icons/bs'
import footerImg from '../../../assets/footerimg.avif'

import './Footer.css'
const Footer = () => {
    return (
        <div className='flex flex-col mt-[5vh]'>
            <div className='flex flex-row justify-evenly align-middle flex-wrap mx-[5%] space-x-1'>
                <p className='text-sm md:text-xl font-bold w-[30%]'>Subscribe to our newsletter and get 4 Coupons worth US$35</p>
                <form className='ms-[20px]'>
                    <div className="relative">
                        <input type="search" id="search" className="border-blue-600 block max-w-[200%] p-[8px] pl-2 text-sm text-gray-900 border bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address" required />
                        <button type="submit" className="text-white absolute right-[1px] bottom-[0px] focus:outline-none font-medium text-sm px-4 py-3 bg-blue-500 "><BsSearch /></button>
                    </div>
                </form>
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#b38a8e" offset="0%" />
                        <stop stopColor="#f9c9c5" offset="20%" />
                        <stop stopColor="#fff" offset="49%" />
                        <stop stopColor="#f9c9c5" offset="50%" />
                        <stop stopColor="#b38a8e" offset="100%" />
                    </linearGradient>
                </svg>
                <p className='text-xl ml-[50px]'>FOLLOW US</p>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsFacebook style={{ fill: "url(#blue-gradient)" }} /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsYoutube style={{ fill: "url(#blue-gradient)" }} /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsInstagram style={{ fill: "url(#blue-gradient)" }} /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsTwitter style={{ fill: "url(#blue-gradient)" }} /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsPinterest style={{ fill: "url(#blue-gradient)" }} /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsTiktok style={{ fill: "url(#blue-gradient)" }} /></div>
            </div>
            <div className="footer bg-gray-100 text-black">
                <div className="c3">
                    <h2 className='text-lg font-semibold'>DISCOVER</h2>
                    <ul id="ul">
                        <li className='my-[10px]'>Ultra Light</li>
                        <li className='my-[10px]'>Spring Hinges</li>
                        <li className='my-[10px]'>Premium Collection</li>
                        <li className='my-[10px]'>Goggles</li>
                        <li className='my-[10px]'>Adjustable-nose-pads</li>
                        {/* <li className='my-[10px]'></li> */}
                    </ul>
                </div>
                <div className="c3">
                    <h2 className='text-lg font-semibold'>COMPANY</h2>
                    <ul id="ul">
                        <li className='my-[10px]'>Zeelool Blog</li>
                        <li className='my-[10px]'>About Zeelool</li>
                        <li className='my-[10px]'>Goggles</li>
                        <li className='my-[10px]'>About Zeelool</li>
                        <li className='my-[10px]'>Zeelool Blog</li>
                        <li className='my-[10px]'>Contact Zeelool</li>
                        <li className='my-[10px]'>Zeelool Blog</li>
                        <li className='my-[10px]'>Contact Zeelool</li>
                        <li className='my-[10px]'>Spring Hinges</li>
                        <li className='my-[10px]'>Premium Collection</li>

                        {/* <li className='my-[10px]'></li> */}
                    </ul>
                </div>
                <div className="c3">
                    <h2 className='text-lg font-semibold'>POLICIES</h2>
                    <ul id="ul">
                        <li className='my-[10px]'>Return</li>
                        <li className='my-[10px]'>Promise And Refund</li>
                        <li className='my-[10px]'>Return</li>
                        <li className='my-[10px]'>Promise And Refund</li>
                        <li className='my-[10px]'>Terms & conditions</li>
                        <li className='my-[10px]'>Return</li>
                        {/* <li className='my-[10px]'></li> */}
                    </ul>
                </div>

                <div className="c4">
                    <h2 className='text-lg font-semibold'>HELP & INFO</h2>
                    <ul id="ul">
                        <li className='my-[10px]'>Facebook</li>
                        <li className='my-[10px]'>Instagram</li>
                        <li className='my-[10px]'>Twitter</li>
                        <li className='my-[10px]'>Youtube </li>
                    </ul>
                </div>

                <div className="c4">
                    <h2 className="text-2xl font-bold">Need Help?</h2>
                    <ul id="ul">
                        <li className='my-[10px] flex flex-row'><p className='p-2 border-black border-[1px] rounded-full mr-3'><AiOutlineMessage className='border-black text-black rounded-full' /></p><button className='rounded-full bg-blue-600 text-white p-[10px]'>Contact Us</button></li>
                        <li className='my-[10px] flex flex-row'><p className='p-2 border-black border-[1px] rounded-full mr-3'><BsEnvelope className='border-black text-black rounded-full' /></p>Customer service</li>
                        <li className='my-[10px] flex flex-row'><p className='p-2 border-black border-[1px] rounded-full mr-3'><BsEnvelope className='border-black text-black rounded-full' /></p>Customer service</li>
                        <li className='my-[10px] flex flex-row'><p className='p-2 border-black border-[1px] rounded-full mr-3'><BsPhone className='border-black text-black rounded-full' /></p>Customer service</li>
                        <li className='w-full'><button className='bg-blue-600 text-white py-[5px] px-[30px]' >Track Order</button></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row flex-nowrap justify-between mx-[5%] p-5'>
                <img width={'50%'} src={footerImg} alt="" />
                <p>© 2023 Zeelool Inc. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer