import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import { CarouselData } from '../components/Carousel/CarouselData'
import Cards from '../components/Card/Cards'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Carousel slides={CarouselData}/>
      <Cards />
      <Footer />
    </>
  )
}

export default Home