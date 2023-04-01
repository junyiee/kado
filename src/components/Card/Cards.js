import React from 'react'
import './Cards.css'
// import CardItem from './CardItem'
import { FeaturedItems } from './CardsData'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        // <div className="cards">
        //     <h1>Featured Items</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__items">
        //                 <CardItem
        //                     src={require('../../assets/apollo80.jpg')}
        //                     text="One small step for man, One giant leap for mankind."
        //                     label="SPACE80: APOLLO"
        //                     path='/'
        //                 />
        //                 <CardItem
        //                     src={require('../../assets/space65.webp')}
        //                     text="R3: The Last Dance"
        //                     label="SPACE65"
        //                     path='/'
        //                 />
        //                 <CardItem
        //                     src={require('../../assets/think6.5v2.webp')}
        //                     text="Refuse to Sink"
        //                     label="THINK6.5 V2"
        //                     path='/'
        //                 />
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="cards">
            <h1>Featured Items</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    {FeaturedItems.map((item) =>
                        <div className="card-item">
                            <Link className="item-link" to={item.path}>
                                <figure className="img-wrap" data-category={item.label}>
                                    <img src={item.img} alt={item.label} />
                                </figure>
                                {/* <img src={item.img} alt={item.label} /> */}
                                <div className="item-info">
                                    <h5 className='item-text'>{item.description}</h5>
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