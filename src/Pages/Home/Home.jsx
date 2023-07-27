import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import SpinWheel from '../../Components/Home/SpinWheel/SpinWheel'
import BestSellers from '../../Components/Home/BestSellers/BestSellers'
import Footer from '../../Components/Home/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <SpinWheel />
            <BestSellers />
            <Footer/>
        </>
    )
}

export default Home