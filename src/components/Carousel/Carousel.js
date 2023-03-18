import React, { useState } from 'react'
import './Carousel.css'
import { CarouselData } from './CarouselData.js'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    /*
    if current is first index, go to last index
    else go to previous index
    allows carousel to loop backwards
    */
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    /*
    if current is last index, go to first index
    else go to next index
    allows carousel to loop forward
    */
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    // in the case of complicated array
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='carousel'>
            <BsChevronLeft size={60} className='left' onClick={prevSlide} />
            <BsChevronRight size={60} className='right' onClick={nextSlide} />
            {CarouselData.map((slide, index) => {
                return (
                    // if index is at current, return class slide active, else return class side
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.img} alt={slide.title} className='item'/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Carousel