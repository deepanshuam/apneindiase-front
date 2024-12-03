import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import CardsGrid from '../Components/Cards/Cards'
import HowItWorks from '../Components/Testimonials/Testimonials'
import AddBusinessSection from '../Components/Subfooter/Subfooter'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CardsGrid/>
    <HowItWorks/>
    <AddBusinessSection/>
    <Footer/>
    </>
  )
}

export default Home
