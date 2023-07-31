import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carouselimg1 from '../../../assets/carouselimg1.avif'
import carouselimg2 from '../../../assets/carouselimg2.avif'
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const MainCrousel = ({ arr, }) => {
    return (
        <div className='mx-[5%] my-[5vh]' style={{ zIndex: '0' }}>
            <p className='text-2xl text-center my-[20px] font-bold'>Designer's Collection</p>
            <MultiCarousel infinite={true} arrows={false} partialVisible={false} responsive={responsive} autoPlay={true} autoPlaySpeed={1000}>
                {[carouselimg1, carouselimg2].map((item) => {
                    return (<div><img src={item} alt="" /></div>
                    )
                })}
            </MultiCarousel>
        </div>
    )
}

export default MainCrousel