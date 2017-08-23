import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import CardType from '../constants/CardType'

/* Represents the reverse (back-side) of a card. Clicking triggers
the start card flip action */
const CardFaceDown = ( {card, onFlipCardStart} ) => {
    
    // disable click if card already started to flip
    const cardClick = card.get('isFlipping') ?
        {}
        :
        {onClick : onFlipCardStart.bind(this, card.get('id'))}

    return (
        <img
            src={CardType.REVERSE.image}
            alt={CardType.REVERSE.name}
            width="200"
            height="250"
            {...cardClick}
        />
    )
}

CardFaceDown.propTypes = {
    card: ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        isFlipping: PropTypes.bool,
    }),
    onFlipCardStart: PropTypes.func.isRequired,
}

export default CardFaceDown