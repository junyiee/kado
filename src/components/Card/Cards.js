import React from 'react'
import './Cards.css'
import { FeaturedItems } from './CardsData'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className="cards">
            <h1>Featured Items</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    {FeaturedItems.map((item) =>
                        <div className="card-item">
                            <Link className="item-link" to={item.path}>
                                <div className="img-wrap">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <div className="item-info">
                                    <h5 className='item-text'>{item.title}</h5>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cards