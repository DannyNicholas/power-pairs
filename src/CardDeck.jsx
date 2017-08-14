import React from 'react'
import Card from './Card'

import './CardDeck.css';

const CardDeck = ( {cards, onTurnCard} ) => {
    return (
        <div className="card-deck">
            {
                cards.map(card =>
                <Card
                    key={card.get('id')}
                    card={card}
                    onTurnCard={onTurnCard}
                />)
            }
        </div>
    )
}

export default CardDeck