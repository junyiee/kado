import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={require('../../assets/apollo80.jpg')}
                            text="One small step for man, One giant leap for mankind."
                            label="SPACE80: APOLLO"
                            path='/'
                        />
                        <CardItem
                            src={require('../../assets/space65.webp')}
                            text="R3: The Last Dance"
                            label="SPACE65"
                            path='/'
                        />
                        <CardItem
                            src={require('../../assets/think6.5v2.webp')}
                            text="Refuse to Sink"
                            label="THINK6.5 V2"
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards