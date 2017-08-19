import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import CardState from './constants/CardState'
import CardType from './constants/CardType'

import './Card.css'

const Card = ( {card, onTurnCard} ) => {

    const CardFaceDown = () => {
        return (
            <img
                src={CardType.REVERSE.image}
                alt={CardType.REVERSE.name}
                width="200"
                height="250"
                onClick={onTurnCard.bind(this, card.get('id'))}
            />
        )
    }

    const CardFaceUp = () => {
        return (
            <img
                src={card.get('type').get('image')}
                alt={card.get('type').get('name')}
                width="200"
                height="250"
                onClick={onTurnCard.bind(this, card.get('id'))}
            />
        )
    }
    
    return (
        <div className="card">
            {card.get('cardState') === CardState.FACE_UP ?  <CardFaceUp /> : <CardFaceDown />}
        </div>
    )  
}

Card.propTypes = {
    card: ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        type: PropTypes.object.isRequired,
        faceDownImage: PropTypes.string.isRequired,
        faceUpImage: PropTypes.string.isRequired,
        cardState: PropTypes.string.isRequired
    })
}

export default Card