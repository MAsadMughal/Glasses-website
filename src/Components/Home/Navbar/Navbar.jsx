import React, { useState } from 'react'
import logo from '../../../assets/logonav.avif'
import { BsPerson, BsHeart } from 'react-icons/bs'
import { FaEye, FaGlobe, FaBagShopping } from 'react-icons/fa6'
import clsx from 'clsx';


const Navbar = () => {
  const [eye, setEye] = useState(false)
  return (
    <div className="mx-2">
      {/* <div className="flex py-3 flex-row space-x-3 items-center justify-evenly fixed w-[97%] bg-white"> */}
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
        <BsPerson className='cursor-pointer text-2xl' />
        <BsHeart className='cursor-pointer text-2xl' />
        <FaBagShopping className='cursor-pointer text-2xl' />
        <FaGlobe className='cursor-pointer text-2xl' />
        <FaEye onClick={() => setEye(!eye)} className={clsx(`cursor-pointer text-lg`, eye && `text-blue-500`)} />
      </div>
    </div >)
}

export default Navbar