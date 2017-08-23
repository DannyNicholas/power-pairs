import React from 'react'
import Card from './Card'

const CardRow = ( {cards, onTurnCard, onFlipCardStart, onFlipCardCompleted} ) => {
    return (
        <div>
            {
                cards.map(card =>
                    <Card
                        key={card.get('id')}
                        card={card}
                        onTurnCard={onTurnCard}
                        onFlipCardStart={onFlipCardStart}
                        onFlipCardCompleted={onFlipCardCompleted}
                    />
                )
            }
        </div>
    )
}

export default CardRow