import React, { useState } from 'react'
import Modal from 'react-modal'
import './Spinwheel.css';
import turntable from '../../../assets/6thturntable.webp'
import { AiOutlineClose } from 'react-icons/ai'

const cartItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
];
const SpinWheel = () => {
    const [spinning, setSpinning] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const startSpinning = () => {
        if (!spinning) {
            const randomIndex = Math.floor(Math.random() * cartItems.length);
            setSelectedItem(cartItems[randomIndex]);
            setSpinning(true);

            // Simulate the spinning htmlFor 5 seconds
            setTimeout(() => {
                setSpinning(false);
            }, 5000);
        }
    };

    const [open, setOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            transition: 'all 0.3s ease-in-out',
            // overflow: 'visible',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxHeight: '90vh',
            maxWidth: '400px',
            zIndex:'1000',
        },

    };

    return (
        <Modal
            isOpen={open}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {/* <div className='rounded-[10px] p-5'> */}
            {/* <div className="flex flex-col justify-center w-full h-full"> */}
            <div className='p-3'>
                <div className="flex flex-row justify-end text-2xl cursor-pointer" onClick={() => setOpen(false)}>
                    <AiOutlineClose />
                </div>
                <p onClick={() => setOpen(false)} className='text-xl'><img src={turntable} /></p>
                <p className='text-center'>Each spin takes 20 points</p>
                <div className="cart-wheel-container">
                    <div className={`cart-wheel ${spinning ? 'spinning' : ''}`}>
                    </div>
                </div>
                <p className='text-end underline mt-3 text-sm cursor-pointer w-full'>Lucky draw history</p>

            </div>
            <div className="h-[200px] bg-blue-200 mt-3 p-5">
                <form>
                    <div className="relative">
                        <input type="search" id="search" className="border-blue-600 block w-full p-[8px] pl-5 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address" required />
                        <button type="submit" className="text-white absolute right-0 bottom-[1px] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-500 ">Get Coupons</button>
                    </div>
                </form>

                <div className="flex items-center mt-5">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 border-blue-600 cursor-pointer border-[5px]" />
                    <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I would like to receive discounts from Zeelool.</label>
                </div>
                <div className="flex mt-3">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 border-blue-600 cursor-pointer border-[5px]" />
                    <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept to Zeelool's <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">User agreements and Privacy Policy.</a>.</label>
                </div>


            </div>
            {/* <button className="spin-button" onClick={startSpinning}>
                    <GiShoppingCart size={24} />
                    <span>Spin</span>
                </button> */}
            {/* {selectedItem && (
                    <div className="result">
                        <span>Congratulations!</span>
                        <p>You won: {selectedItem}</p>
                    </div>
                )} */}
            {/* </div>
            </div> */}
        </Modal >)
}

export default SpinWheel