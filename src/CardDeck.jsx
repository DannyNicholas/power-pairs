import React from 'react'
import Immutable from 'immutable'
import CardRow from './CardRow'

import './CardDeck.css';

const CardDeck = ( {cards, onTurnCard, onFlipCardStart, onFlipCardCompleted} ) => {

    // TODO provide cards in each row via props
    const cardsInRow = 2

    // split list of cards into multiple lists,
    // one list per row
    const rowsOfCards = splitIntoChunks(cards, cardsInRow)

    return (
        <div className="card-deck">
            {
                rowsOfCards.map((cardRow, index) =>
                    <CardRow
                        key={index}
                        cards={cardRow}
                        onTurnCard={onTurnCard}
                        onFlipCardStart={onFlipCardStart}
                        onFlipCardCompleted={onFlipCardCompleted}
                    />
                )
            }
        </div>
    )
}

// split list into multiple smaller lists
function splitIntoChunks(list, chunkSize = 1) {
  return Immutable.Range(0, list.count(), chunkSize)
    .map(chunkStart => list.slice(chunkStart, chunkStart + chunkSize));
}

export default CardDeck