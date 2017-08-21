import React from 'react'
import Card from './Card'

const CardRow = ( {cards, onTurnCard} ) => {
    return (
        <div>
            {
                cards.map(card =>
                    <Card
                        key={card.get('id')}
                        card={card}
                        onTurnCard={onTurnCard}
                    />
                )
            }
        </div>
    )
}

export default CardRow