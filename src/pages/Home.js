import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { CarouselData } from '../components/Carousel/CarouselData'
import Cards from '../components/Card/Cards'

function Home() {
  return (
    <>
      <Carousel slides={CarouselData}/>
      <Cards />
    </>
  )
}

export default Home