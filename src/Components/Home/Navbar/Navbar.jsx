import React, { useEffect, useState } from 'react'
import logo from '../../../assets/logo.jpg'
import { BsPerson, BsHeart } from 'react-icons/bs'
import { FaEye, FaGlobe, FaBagShopping } from 'react-icons/fa6'
import clsx from 'clsx';
import topblackhead from '../../../assets/topblackhead.webp'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
const Navbar = () => {
  const [eye, setEye] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {isNavbarVisible && <img className='bg-black' src={topblackhead} />}
      <div className='flex flex-row bg-gray-100 py-[5px] justify-evenly align-middle'>
        <span className='flex flex-row flex-nowrap'><p className='text-sm'>Free standard shipping on USD $69.00+ </p><AiOutlineQuestionCircle className='mt-[2px] opacity-70 mx-[5px]' /></span>
        <span className='flex flex-row flex-nowrap'><p className='text-sm'>Buy 1, get other frames 50 % off</p><AiOutlineQuestionCircle className='mt-[2px] opacity-70 mx-[5px]' /></span>
        <p>Help Center</p>
        <p>Track Order</p>
      </div>
      <div className="flex py-3 flex-row space-x-3 items-center justify-evenly bg-white">
        <div className='w-[150px]'>
          <img width={'150px'} src={logo} />
        </div>
        <div className='flex max-w-[70%] text-sm md:text-md overflow-x-auto mx-3 whitespace-nowrap flex-row space-x-5'>
          <p className='cursor-pointer'>Eyeglasses</p>
          <p className='cursor-pointer'>Sunglasses</p>
          <p className='cursor-pointer'>New In</p>
          <p className='cursor-pointer'>Accessories</p>
          <p className='cursor-pointer'>Highlights</p>
          <p className='cursor-pointer'>Flash sale</p>
          <p className='cursor-pointer'>Features</p>
        </div>
        <form className='ms-2'>
          <div className="relative">
            <div className="absolute left-0 flex items-center pointer-events-none">
            </div>
            <input id="search" className="block w-full p-1 px-2 text-sm text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            <svg className="absolute right-2.5 bottom-2 w-3 h-3 cursor-pointer text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
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

        <BsPerson style={{ fill: "url(#blue-gradient)" }} className=' cursor-pointer text-2xl ' />
        <BsHeart style={{ fill: "url(#blue-gradient)" }} className=' cursor-pointer text-2xl ' />
        <FaBagShopping style={{ fill: "url(#blue-gradient)" }} className=' cursor-pointer text-2xl ' />
        <FaGlobe style={{ fill: "url(#blue-gradient)" }} className=' cursor-pointer text-2xl ' />
        <FaEye onClick={() => setEye(!eye)} style={{ fill: "url(#blue-gradient)" }} className={clsx(`cursor-pointer text-lg`, eye && `text-blue-500`)} />
      </div>
    </div >)
}

export default Navbar