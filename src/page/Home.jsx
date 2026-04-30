import React from 'react'
import ChaiSection from "../components/ChaiSection"
import CoffeeSection from "../components/CoffeeSection"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Mission from "../components/Mission"
import HeroSection from "../components/HeroSection"
import TestimonialCarousel from "../components/TestimonialCarousel"
import WhatWeOffer from '../components/WhatWeOffer'
import MenuScroll from '../components/MenuScroll'
import MenuDisplay from '../components/MenuDisplay'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhatWeOffer />
            {/* <ChaiSection /> */}
            <MenuScroll />
            <MenuDisplay />
            <Mission />
            <CoffeeSection />
            <TestimonialCarousel />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Home
