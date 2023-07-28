import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import SpinWheel from '../../Components/Home/SpinWheel/SpinWheel'
import BestSellers from '../../Components/Home/BestSellers/BestSellers'
import Footer from '../../Components/Home/Footer/Footer'
import TwoBanners from '../../Components/Home/TwoBanners/TwoBanners'
import banner1 from '../../assets/howtochooseeyeglasses.avif'
import banner2 from '../../assets/allunder16.avif'
import banner3 from '../../assets/lastchanceclearance.webp'
import MainCrousel from '../../Components/Home/Carousel/MainCrousel'
import Memorywall from '../../Components/Home/memorywall/Memorywall'
import TopBanners from '../../Components/Home/TopBanners/TopBanners'
import BuyatZeelool from '../../Components/Home/BuyAtZeelool/BuyatZeelool'
import NewArrivals from '../../Components/Home/NewArrivals/NewArrivals'
import FlashSale from '../../Components/Home/FlashSale/FlashSale'
import PremiumCollection from '../../Components/Home/PremiumCollection/PremiumCollection'
function Home() {
    return (
        <>
            <Navbar />
            <TopBanners />
            <SpinWheel />
            <BestSellers />
            <NewArrivals/>
            <MainCrousel />
            <TwoBanners banner1={banner2} banner2={banner3} />
            <PremiumCollection/>
            <FlashSale/>
            <TwoBanners banner1={banner1} banner2={banner1} />
            <Memorywall />
            <BuyatZeelool/>
            <Footer />

        </>
    )
}

export default Home