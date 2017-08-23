import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import CardRow from './CardRow'

import './CardDeck.css';

const CardDeck = ( {cards, ...otherProps} ) => {

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
                        {...otherProps}
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

CardDeck.propTypes = {
    cards: PropTypes.object.isRequired
}

export default CardDeck