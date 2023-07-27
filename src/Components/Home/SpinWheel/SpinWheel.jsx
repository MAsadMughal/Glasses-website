import React, { useState } from 'react'
import Modal from 'react-modal'
import './Spinwheel.css';
import { GiShoppingCart } from 'react-icons/gi'
import turntable from '../../../assets/6thturntable.webp'
import { FaArrowRight } from 'react-icons/fa'
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

            // Simulate the spinning for 5 seconds
            setTimeout(() => {
                setSpinning(false);
            }, 5000);
        }
    };

    const [open, setOpen] = useState(true);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            zIndex: '100',
            transition: 'all 0.3s ease-in-out',
            // overflow: 'visible',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxHeight: '90vh',
            maxWidth: '400px'
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