import React, { useState, useRef, useEffect } from 'react'
import './Carousel.css'
import { CarouselData } from './CarouselData.js'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 4000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    }, [current, length])

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
        <section className="carousel">
            <div className="carousel-wrapper">
                <BsChevronLeft size={60} className='left' onClick={prevSlide} />
                <BsChevronRight size={60} className='right' onClick={nextSlide} />
                {CarouselData.map((slide, index) => {
                    return (
                        <div className="slide" key={index}>
                            {index === current && (
                                <div className="slider">
                                    <img src={slide.img} alt={slide.title} />
                                    <div className="carousel-content">
                                        <h1>{slide.title}</h1>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Carousel