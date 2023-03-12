import React, { useState } from 'react'
import './Carousel.css'
import { images } from './CarouselData.js'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function Carousel() {
    const [currentImage, setCurrentImage] = useState(0)
    
    return (
        <section className='carousel-container'>
            <div className='carousel-item' style={{ backgroundImage: `url(${images[currentImage].img})` }}>
                <div className='left' onClick={() => { currentImage > 0 && setCurrentImage(currentImage - 1) }}>
                    <BsChevronLeft size={60}/>
                </div>
                <div className='center'></div>
                <div className='right' onClick={() => { currentImage < images.length - 1 && setCurrentImage(currentImage + 1) }}>
                    <BsChevronRight size={60}/>
                </div>
            </div>
        </section>
    )
}

export default Carousel