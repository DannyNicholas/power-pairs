import React from 'react'
import Immutable from 'immutable'
import CardRow from './CardRow'

import './CardDeck.css';

const CardDeck = ( {cards, onTurnCard} ) => {

    // TODO provide cards in each row via props
    const cardsInRow = 2

    // split list of cards into multiple lists,
    // one list per row
    const rowsOfCards = splitIntoChunks(cards, cardsInRow)

    return (
        <div className="card-deck">
            {
                rowsOfCards.map(cardRow =>
                    <CardRow
                        // TODO hash key??
                        key={cardRow.toString()}
                        cards={cardRow}
                        onTurnCard={onTurnCard}
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