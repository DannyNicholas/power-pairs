import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

/* Represents the face (front-side) of a card. */
const CardFaceUp = ( {cardType} ) => {
    return (
        <img
            src={cardType.get('image')}
            alt={cardType.get('name')}
            width="200"
            height="250"
        />
    )
}

CardFaceUp.propTypes = {
    cardType: ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
}

export default CardFaceUp