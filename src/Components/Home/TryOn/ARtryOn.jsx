import React from 'react'
import ar from '../../../assets/tryingvideoimg.avif'
import vid from '../../../assets/video.mp4'
const ARtryOn = () => {
    return (
        <div className='mx-[5%]' style={{
            backgroundImage: `url(${ar})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', minHeight: '30vh', maxHeight: '100vh'
        }}>
            <div className='flex flex-row justify-between mx-[5%] py-[3%] flex-nowrap'>
                <div className='py-[10px] flex flex-col w-[30%]'>
                    <p className='text-3xl font-bold'>ZEELOOL AR TRY-ON</p>
                    <p className='text-sm leading-7 mt-[2%]'>Zeelool gives you an innovative way to shop for glasses with the AR Try-On function that enables realistic frame visualization. It makes finding frames you'll love as easy as clicking the button. Using AR...</p>
                    <button className='bg-black text-white font-bold w-[60%] mt-3 py-1'>TRY-ON FAST</button>
                </div>
                {/* <div className='me-[10%] ms-[30%] py-[10px] rounded-lg'> */}
                    <video controls='controls' className='rounded-[20px] w-[40%] me-[10%]' autoPlay muted>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ARtryOn