import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsSearch, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs'

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
                <p className='text-xl ml-[50px]'>FOLLOW US</p>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsFacebook /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsYoutube /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsInstagram /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsTwitter /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsPinterest /></div>
                <div className='p-2 transition-all duration-100  cursor-pointer text-xl hover:rounded-full'><BsTiktok /></div>
            </div>
        </div>
    )
}

export default Footer