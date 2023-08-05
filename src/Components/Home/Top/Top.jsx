import React from 'react'
import top1 from '../../../assets/top1.avif';
import top2 from '../../../assets/top2.avif';
import top3 from '../../../assets/top3.avif';
const Top = () => {
    return (
        <div className='flex flex-col justify-center align-middle'>
            <div className='flex flex-row flex-nowrap justify-center align-middle mx-[5%] mt-[5vh] space-x-1 text-white'>
                {[top1, top2, top3, top1, top2].map((item) =>
                    <div className='' style={{
                        backgroundImage: `url(${item})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minHeight: '40vh',
                        maxHeight: '100vh',
                        minWidth: '20%'

                    }}>
                        <div className='flex flex-row justify-between align-middle mt-[5rem] pt-[100%] pb-0 md:pb-[5%] mx-[5%]'>
                            <p className='mt-[5%] text-sm'>
                                Benitez
                            </p>
                            <div className='flex flex-col text-center'>
                                <p className='text-sm truncate md:text-md md:font-bold'>US $15.00</p>
                                <p className='text-xs truncate md:text-sm line-through '>US $35.95</p>
                            </div>

                        </div>
                    </div>

                )}</div>
                
        </div>
    )
}

export default Top